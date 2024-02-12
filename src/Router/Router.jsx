import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Details from "../pages/Details";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
import EditTodo from "../pages/EditTodo";
import SiginIn from "../pages/SiginIn";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        loader: async () => fetch(`https://todo-server-ten-wine.vercel.app/todos`)
    },
    {
        path: 'todo/:id',
        element: <Details />,
        loader: async ({params}) => fetch(`https://todo-server-ten-wine.vercel.app/todos/${params.id}`)
    },
    {
        path: '/add',
        element: <PrivateRoute><AddTodo /></PrivateRoute>
    },
    {
        path: '/signin',
        element: <SiginIn />
    },
    {
        path: '/edit/:id',
        element: <PrivateRoute><EditTodo /></PrivateRoute>,
        loader: async ({params}) => fetch(`https://todo-server-ten-wine.vercel.app/todos/${params.id}`)
    }
])

export default Router;