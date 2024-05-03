import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/global/Navbar"
import Footer from "./components/global/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Toaster } from "react-hot-toast"
import JobsPage from "./pages/JobsPage"
import ProfilePage from "./pages/ProfilePage"
import SingleJobPage from "./pages/SingleJobPage"
import JobApplicationPage from "./pages/JobApplicationPage"
import { useState } from "react"
import CreateJob from "./pages/CreateJob"
import SavedJobs from "./pages/SavedJobs"
import MyJobs from "./pages/MyJobs"
import EditJob from "./pages/EditJob"
import AllJobApplications from "./pages/AllJobApplications"
import PublicRoute from "./Routes/PublicRoute"
import PrivateRoute from "./Routes/PrivateRoute"
import ResumeForm from "./pages/ResumeForm"
import MyApplications from "./pages/MyApplications"
import UserProfile from "./pages/UserProfile"
import ChatPage from "./pages/ChatPage"
import ShowNavbar from "./components/Extra/ShowNavbar"
import ShowFooter from "./components/Extra/ShowFooter"
import AllChats from "./pages/AllChats"
import ContactPage from "./pages/ContactPage"



function App() {


  let [open, setOpen] = useState(false);


  return (
    <>

      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#4aed88',
              secondary: '',
            },
          },
        }}
      ></Toaster>

      <ShowNavbar>
      <Navbar open={open} setOpen={setOpen} />
      </ShowNavbar>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/signin" element={ <PublicRoute element={<Login />}/> } />
        <Route path="/contact" element={ <PublicRoute element={<ContactPage />}/> } />
        <Route path="/signup" element={<PublicRoute element={<Register />}/>} />
        <Route path="/jobs" element={<JobsPage open={open} />} />
        <Route path="/profile/:userId" element={<UserProfile/>} />
        <Route path="/resume-builder" element={<ResumeForm />} />
        <Route path="/profile" element={  <PrivateRoute element={<ProfilePage open={open}/>} />} />
        <Route path="/create-job" element={<PrivateRoute element={ <CreateJob />}  /> } />
        <Route path="/all-chats" element={<PrivateRoute element={ <AllChats />}  /> } />
        <Route path="/saved-jobs" element={<PrivateRoute element={<SavedJobs />} /> }   />
        <Route path="/created-jobs" element={<PrivateRoute element={<MyJobs />} /> } />
        <Route path="/my-applications" element={<PrivateRoute element={<MyApplications />} /> } />
        <Route path="/job/:jobId" element={<SingleJobPage />} />
        <Route path="/chat/:userId" element={<ChatPage />} />
        <Route path="/applications/:jobId" element={<PrivateRoute element={<AllJobApplications />} /> } />
        <Route path="/edit-job/:jobId" element={<PrivateRoute element={<EditJob />} /> } />
        <Route path="/application/:jobId" element={<PrivateRoute element={<JobApplicationPage />} /> } />
      </Routes>

      <ShowFooter>
      <Footer />
      </ShowFooter>
    </>
  )
}

export default App
