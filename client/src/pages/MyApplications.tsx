import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { JobType } from "./JobsPage";

const MyApplications = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [applications, setApplications] = useState<JobType[]>();

    const fetchApplications = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            };

            const { data } = await axios.get("/api/user/get-applied-jobs", config);

            console.log(data);
            
            setApplications(data.applications);
        } catch (error : any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <>
        <div className="container mx-auto md:p-6 p-2">
            <h1 className="text-3xl text-center font-bold mb-4">My Applications</h1>
            <div className="grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {applications?.map((application : JobType) => (
                    <div key={application._id} className="border p-4 rounded-lg custom-shadow-1">
                        <h2 className="text-lg font-semibold">{application.title}</h2>
                        <p className="text-gray-500">{application.company}</p>
                        <p className="mt-2">{application.description}</p>
                        <p className="mt-4">
                            <strong>Location:</strong> {application.location}
                        </p>
                        <p>
                            <strong>Salary:</strong> ${application.salary}
                        </p>
                    </div>
                ))}
            </div>
        </div>

       
        
        </>
    );
};

export default MyApplications;
