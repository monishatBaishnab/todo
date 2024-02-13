import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import EnrolTodo from "../components/EnrolTodo";
import PageContainer from "../components/PageContainer";

const Details = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const todoDetails = useLoaderData();


    return (
        <PageContainer titleOne='todo' titleTwo='details' containerClass='p-5 bg-slate-100 rounded-md'>
            <div className="border-b flex items-center justify-between mb-4 pb-4">
                <h4 className="text-2xl font-medium text-slate-700">{todoDetails?.title}</h4>
                <p className="text-slate-500">Total Enrol: <span className="text-green-500 font-medium">{todoDetails?.enroledEmail?.length > 0 ? todoDetails?.enroledEmail?.length : 0}</span></p>
            </div>
            <p className="text-slate-500">{todoDetails?.desc}</p>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t relative">
                <button onClick={() => setShow(!show)} className="bg-green-500 px-4 py-2 text-sm rounded-md text-white">Enrol</button>
                <button onClick={() => navigate('/')} className="bg-slate-500 px-4 py-2 text-sm rounded-md text-white">Go To Home</button>

                <EnrolTodo todoDetails={todoDetails} show={show} setShow={setShow} />
            </div>
        </PageContainer>
    );
};

export default Details;