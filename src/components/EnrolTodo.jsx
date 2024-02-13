import { FaCheckCircle, FaWindowClose } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const EnrolTodo = ({ show, setShow, todoDetails }) => {

    const [email, setEmail] = useState('');

    const veriFyEmail = email => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleEnrol = async () => {
        const toastId = toast.loading('Adding your enrol.');
        if (todoDetails?.enroledEmail?.includes(email)) {
            setEmail('');
            return toast.error('This email already enroled.', { id: toastId });
        }

        todoDetails.enroledEmail = [...todoDetails.enroledEmail, email];
        const verifiedEmail = veriFyEmail(email);
        
        if(!verifiedEmail){
            return toast.error(' Invalid Email.', {id: toastId});
        }

        try {
            await axios.put(`https://todo-server-ten-wine.vercel.app/todos/${todoDetails?._id}`, todoDetails);
            setShow(!show);
            setEmail('');
            toast.success('Enrol added.', {id: toastId});
        } catch (error) {
            console.log(error);
            toast.error('Uncought error.', {id: toastId});
        }

    }
    return (
        <div className={`absolute left-0 max-w-sm bg-white p-5 flex items-center gap-2 rounded-md transition-all ${show ? 'bottom-0 visible opacity-100' : '-bottom-2 opacity-0 invisible'}`}>
            <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" id="title" className="w-full px-4 py-2 rounded-sm focus:outline-none border-2 border-slate-300 mt-1 focus:border-green-500" placeholder="Password" />
            <button onClick={handleEnrol} className="p-3 text-white bg-green-500 rounded-sm"><FaCheckCircle /></button>
            <button onClick={() => setShow(!show)} className="p-3 text-white bg-slate-500 rounded-sm"><FaWindowClose /></button>
        </div>
    );
};

EnrolTodo.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    todoDetails: PropTypes.object,
}

export default EnrolTodo;