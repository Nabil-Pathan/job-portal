import  { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Extra/Loader';
import { RootState } from '../redux/store';

interface Message {
  content: string;
  sender: {
    _id: string;
  };
}

interface ChatUserType {
  name  : string
  email : string
  pic : string
  password : string 
}

const ENDPOINT = "https://jobcrest.onrender.com";

const socket = io(ENDPOINT);

const ChatPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const selectedUserId = params.userId
  const  user  = useSelector((state : RootState)=> state.user.user) 
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatId, setChatId] = useState('');
  const [chatUser, setChatUser] = useState<ChatUserType>();
  const [loading ,setLoading] = useState(false)

  const fetchChat = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.post(`/api/chat/access-chat`, { userId: selectedUserId }, config);
      setChatId(data._id);
      const matchedUser = data.users.find((user: any) => user._id === selectedUserId);

      if (matchedUser) {
        setChatUser(matchedUser);
      }
      setLoading(false)
    } catch (error) {
      console.log((error as Error).message);
      setLoading(false)
    }
  };

  const sendMessage = async (e : FormEvent) => {
    e.preventDefault()    
    
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.post('/api/chat/send-message', {
        chatId: chatId,
        content: newMessage,
      }, config);

      socket.emit("new-message", data);
      setMessages((prevMessages) => [...prevMessages, data as Message]);
      setNewMessage('');
    } catch (error) {
      console.log((error as Error).message);
    }
  
  };

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.get(`/api/chat/all-messages/${chatId}`, config);
      setMessages(data.messages as Message[]);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    if (selectedUserId !== '' && selectedUserId !== null) {
      fetchChat();
    }

    if (chatId !== '' && chatId !== null) {
      fetchMessages();
    }

    if (socket && chatId) {
      socket.emit('setup', { _id: user?._id });
      socket.emit('join-chat', chatId);
    }
  }, [socket, selectedUserId, chatId]);

  useEffect(() => {
    socket.on('message received', (newMessageReceived) => {
      setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
    });

    return () => {
      socket.off('message received');
    };
  }, [socket, messages]);

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const sentMessageClasses = 'max-w-3/4 mb-4 p-4 rounded bg-gray-800 text-white';
  const receivedMessageClasses = 'max-w-3/4 mb-4 p-4 rounded bg-gray-300';

  const handleNavigate = ()=>{
    navigate('/')
  }

  return (
    <>
    <div className="w-full h-screen flex flex-col">
      <div className="flex items-center gap-4 p-4 bg-gray-800 text-white sticky top-0">
        <button className='border border-gray-300 shadow-md px-4 py-3 rounded-md' onClick={handleNavigate}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>

        {
        chatUser && 
        <>
         <img src={chatUser.pic} className='w-9 h-9 object-cover rounded-full' alt="profile" />
         <h2 className="text-2xl font-bold">{chatUser.name}</h2>
         </>
        }
      
      </div>
      {
        loading ? (<Loader/>) : (
          <div
          id="chat-container"
          className="flex-1 w-full bg-gray-100 overflow-y-auto p-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-end ${
                message.sender._id === user?._id ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={
                  message.sender._id === user?._id ? sentMessageClasses : receivedMessageClasses
                }
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        )
      }
     
      <div className=" flex items-center justify-center  sticky bottom-0">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 rounded-md outline-none p-4 "
          />
          <button onClick={sendMessage} className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
      </div>
    </div>
    </>
  );
};

export default ChatPage;