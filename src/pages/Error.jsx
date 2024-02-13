import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <PageContainer>
                <div className="">
                    <h1 className="text-4xl uppercase font-medium text-center text-slate-700">Page not found.</h1>
                    <div className="flex items-center gap-2 justify-center flex-wrap mt-5">
                        <button onClick={() => navigate('/')} type="button" className="px-5 py-2 bg-green-500 rounded-md text-white">Go to Home</button>
                        <button onClick={() => navigate(-1)} type="button" className="px-5 py-2 bg-slate-500 rounded-md text-white">Go to Back</button>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default Error;