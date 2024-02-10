import { useNavigate } from "react-router-dom";

const SiginIn = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">sign</span> in</h2>
            <div className="max-w-screen-md mx-auto bg-slate-100 p-5 rounded-md">
                <div>
                    <form className="space-y-2">
                        <div>
                            <label htmlFor="title" className="text-slate-700 block">User Email</label>
                            <input name="desc" type="text" id="title" className="w-full px-4 py-2 rounded-md focus:outline-none border border-slate-300 mt-1 focus:border-green-500" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="title" className="text-slate-700 block">User Password</label>
                            <input name="desc" type="password" id="title" className="w-full px-4 py-2 rounded-md focus:outline-none border border-slate-300 mt-1 focus:border-green-500" placeholder="Password" />
                        </div>
                        <div className="flex items-center gap-3">
                            <button type="submit" className="px-5 py-2 bg-green-500 rounded-md text-white">Signin</button>
                            <button onClick={() => navigate('/')} type="button" className="px-5 py-2 bg-slate-500 rounded-md text-white">Cancle</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SiginIn;