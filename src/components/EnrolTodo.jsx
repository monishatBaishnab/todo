import { FaCheckCircle, FaWindowClose } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";
import toast from "react-hot-toast";

const EnrolTodo = ({ show, setShow }) => {
    const [email, setEmail] = useState('');
    const handleEnrol = () => {
        const toastId = toast.loading('Adding your enrol.');
        if(!email){
            return toast.error(' Invalid Email.', {id: toastId});
        }
        toast.success('Enrol added.', {id: toastId});
    }
    return (
        <div className={`absolute left-0 max-w-sm bg-white p-5 flex items-center gap-2 rounded-md transition-all ${show ? 'bottom-0 visible opacity-100' : '-bottom-2 opacity-0 invisible'}`}>
            <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" id="title" className="w-full px-4 py-2 rounded-sm focus:outline-none border-2 border-slate-300 mt-1 focus:border-green-500" placeholder="Password" />
            <button onClick={handleEnrol} className="p-3 text-white bg-green-500 rounded-sm"><FaCheckCircle /></button>
            <button onClick={() => setShow(!show)} className="p-3 text-white bg-slate-500 rounded-sm"><FaWindowClose /></button>
        </div>
    );
};

EnrolTodo.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
}

export default EnrolTodo;