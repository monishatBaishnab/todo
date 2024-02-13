import TodoContainer from "../components/TodoContainer";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res?.data));
    }, [])

    return (
        <div className="bg-slate-50 min-h-screen px-5 py-10 md:px-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">Todo</span> App</h2>
            <div className={`max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5`}>
                <div className="md:col-span-3">
                    <Nav />
                    <p className="text-slate-500 text-sm mt-2">Note: If you want to add, edit or delete a todo, then signin with admin email and password.</p>
                    <TodoContainer />
                </div>
                <div className="col-span-2 mt-8">
                    <h4 className="text-3xl font-medium capitalize mt-5 text-center text-green-500">widget from public api</h4>
                    <div className="bg-slate-100 p-5 rounded-md space-y-3">
                        {
                            users?.map(user => <div key={user?.id} className="text-center bg-white py-2 rounded-sm">
                                <h5>{user?.name}</h5>
                                <p>{user?.email}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;