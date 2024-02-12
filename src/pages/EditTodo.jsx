import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const todoData = useLoaderData();
    
    const handleEdit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const todo = { title, desc };
        const toastId = toast.loading('Todo Editing.');
        try {
            await axios.put(`https://todo-server-ten-wine.vercel.app/todos/${id}`, todo);
            toast.success('Todo updated.', {id: toastId});
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('Uncaught error.', {id: toastId});
        }
    }
    return (
        <div className="bg-slate-50 min-h-screen p-10 space-y-8">
            <h2 className="text-5xl uppercase font-semibold text-slate-600 text-center"><span className="text-green-500">Todo</span> Edit</h2>
            <div className="max-w-screen-md mx-auto bg-slate-100 p-5 rounded-md">
                <div>
                    <form className="space-y-2" onSubmit={handleEdit}>
                        <div>
                            <label htmlFor="title" className="text-slate-700 block">Todo Title</label>
                            <input defaultValue={todoData?.title} name="title" type="text" id="title" className="w-full px-4 py-2 rounded-md focus:outline-none border-2 border-slate-300 mt-1 focus:border-green-500" placeholder="Write Todo Title" />
                        </div>
                        <div>
                            <label htmlFor="desc" className="text-slate-700 block">Todo Description</label>
                            <textarea defaultValue={todoData?.desc} name="desc" id="desc" rows="5" className="w-full px-4 py-2 rounded-md focus:outline-none border-2 border-slate-300 mt-1 focus:border-green-500 resize-none" placeholder="Write Todo Description"></textarea>
                        </div>
                        <div className="flex items-center gap-3">
                            <button type="submit" className="px-5 py-2 bg-green-500 rounded-md text-white">Edit Todo</button>
                            <button onClick={() => navigate('/')} type="button" className="px-5 py-2 bg-slate-500 rounded-md text-white">Cancle</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;