import { useNavigate } from "react-router-dom";
import useGetLoggedIn from "../hook/useGetLoggedIn";

const Nav = () => {
    const { loggedIn, setLoggedIn } = useGetLoggedIn();
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.setItem('loggedIn', false);
        setLoggedIn(false);
    }

    return (
        <>
            {
                loggedIn == false || loggedIn == 'false' || loggedIn == null ? <button onClick={() => navigate('/signin')} className="bg-green-500 px-5 py-2 rounded-md text-white">Sign in</button>
                    :
                    <div>
                        <button onClick={() => navigate('/add')} className="bg-green-500 px-5 py-2 rounded-md text-white">Add Todo</button>
                        <button onClick={handleSignOut} className="bg-slate-500 px-5 py-2 rounded-md text-white ml-3">Sign out</button>
                    </div>
            }
        </>
    );
};

export default Nav;