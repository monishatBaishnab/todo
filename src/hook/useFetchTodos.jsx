import axios from "axios";
import { useQuery } from "react-query";

const useFetchTodos = () => {
    const fetchTodos = async () => {
        const res = await axios.get('https://todo-server-ten-wine.vercel.app/todos');
        return res?.data;
    }

    const {data: todos, isLoading: todoLoading, refetch: todoRefetch} = useQuery({queryKey: 'todos', queryFn: fetchTodos});

    return {todos, todoLoading, todoRefetch};
};

export default useFetchTodos;