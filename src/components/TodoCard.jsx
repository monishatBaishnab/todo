import { FaCheckToSlot, FaEye, FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const TodoCard = () => {
    return (
        <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-5 bg-white p-5 rounded-md ">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm basis-10">
                    <FaCheckToSlot className="text-xl text-slate-700" />
                </div>
                <div className="basis-[calc(100%_-_48px)]">
                    <h2 className="text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className="text-slate-500 text-sm">12/10/2024</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65" disabled><FaTrash /></button>
                <button className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65" disabled><MdEdit /></button>
                <button className="bg-slate-200 p-2 rounded-sm text-xl text-slate-700 hover:bg-slate-300 disabled:bg-slate-200 disabled:opacity-65"><FaEye /></button>
            </div>
        </div>
    );
};

export default TodoCard;