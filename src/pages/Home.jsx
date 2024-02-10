import TodoContainer from "../components/TodoContainer";

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">Todo</span> App</h2>
            <div className="max-w-screen-md mx-auto">
                <button className="bg-green-500 px-5 py-2 rounded-md text-white">Add Todo</button>
                <TodoContainer />
            </div>
        </div>
    );
};

export default Home;