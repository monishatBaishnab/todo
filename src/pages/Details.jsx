import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EnrolTodo from "../components/EnrolTodo";

const Details = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">Todo</span> Details</h2>
            <div className="max-w-screen-md mx-auto bg-slate-100 p-5 rounded-md">
                <div>
                    <div className="border-b flex items-center justify-between mb-4 pb-4">
                        <h4 className="text-2xl font-medium text-slate-700">Todo One</h4>
                        <p className="text-slate-500">Total Enrol: <span className="text-green-500 font-medium">10</span></p>
                    </div>
                    <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, eius. Harum quis dolore tenetur sequi nobis ullam reprehenderit doloribus sed.</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t relative">
                        <button onClick={() => setShow(!show)} className="bg-green-500 px-4 py-2 text-sm rounded-md text-white">Enrol</button>
                        <button onClick={() => navigate('/')} className="bg-slate-500 px-4 py-2 text-sm rounded-md text-white">Go To Home</button>

                        <EnrolTodo show={show} setShow={setShow} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;