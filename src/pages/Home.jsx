import { useNavigate } from "react-router-dom";
import TodoContainer from "../components/TodoContainer";
import useGetLoggedIn from "../hook/useGetLoggedIn";

const Home = () => {
    const { loggedIn, setLoggedIn } = useGetLoggedIn();
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('loggedIn');
        setLoggedIn(false);
    }

    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">Todo</span> App</h2>
            <div className="max-w-screen-md mx-auto">
                {
                    !loggedIn
                        ?
                        <button onClick={() => navigate('/signin')} className="bg-green-500 px-5 py-2 rounded-md text-white">Sign in</button>
                        :
                        <div>
                            <button onClick={() => navigate('/add')} className="bg-green-500 px-5 py-2 rounded-md text-white">Add Todo</button>
                            <button onClick={handleSignOut} className="bg-slate-500 px-5 py-2 rounded-md text-white ml-3">Sign out</button>
                        </div>
                }
                <p className="text-slate-500 text-sm mt-2">Note: If you want to add, edit or delete a todo, then signin with admin email and password.</p>
                <TodoContainer />
            </div>
        </div>
    );
};

export default Home;