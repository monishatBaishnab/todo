import TodoContainer from "../components/TodoContainer";
import PageContainer from "../components/PageContainer";
import Nav from "../components/Nav";

const Home = () => {
    
    return (
        <PageContainer titleOne='Todo' titleTwo='app'>
            <Nav />
            <p className="text-slate-500 text-sm mt-2">Note: If you want to add, edit or delete a todo, then signin with admin email and password.</p>
            <TodoContainer />
        </PageContainer>
    );
};

export default Home;