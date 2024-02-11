import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTodos = () => {
    const [todos, setTodos] = useState([]);
    

    useEffect(() => {  
        axios.get('https://todo-server-ten-wine.vercel.app/todos')
        .then(res => setTodos(res.data));
    }, [])

    return todos;
};

export default useFetchTodos;