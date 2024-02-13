import { FaCheckToSlot, FaEye, FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import useGetLoggedIn from "../hook/useGetLoggedIn";
import PropTypes from 'prop-types';
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


const TodoCard = ({ todo }) => {

    const { loggedIn } = useGetLoggedIn();
    const date = new Date(todo?.date);
    const navigate = useNavigate();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo?._id });

    const handleDelete = async () => {
        const toastId = toast.loading('Todo Deleting.');
        try {
            await axios.delete(`https://todo-server-ten-wine.vercel.app/todos/${todo?._id}`);
            toast.success('Todo Deleted.', { id: toastId });
        } catch (error) {
            console.log(error);
            toast.error('Uncaught error.', { id: toastId });
        }
    }

    const cstyle = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    

    return (
        <div className="relative">
            <div ref={setNodeRef} {...attributes} {...listeners} style={cstyle} className="gap-5 bg-white p-5 rounded-md ">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm basis-10">
                        <FaCheckToSlot className="text-xl text-slate-700" />
                    </div>
                    <div className="basis-[calc(100%_-_48px)]">
                        <h2 className="text-slate-700">{todo?.title}</h2>
                        <p className="text-slate-500 text-sm">{date.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 absolute right-5 top-0 bottom-0 my-auto z-40">
                <button onClick={handleDelete} className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65" disabled={!loggedIn}><FaTrash /></button>
                <button onClick={() => navigate(`/edit/${todo?._id}`)} className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65" disabled={!loggedIn}><MdEdit /></button>
                <button onClick={() => navigate(`/todo/${todo?._id}`)} className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65"><FaEye /></button>
            </div>
        </div>
    );
};

TodoCard.propTypes = {
    todo: PropTypes.object,
    todoRefetch: PropTypes.func,
}

export default TodoCard;