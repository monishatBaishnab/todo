import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Details from "../pages/Details";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
import EditTodo from "../pages/EditTodo";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: 'todo/:id',
        element: <Details />
    },
    {
        path: '/add',
        element: <AddTodo />
    },
    {
        path: '/edit/:id',
        element: <EditTodo />
    }
])

export default Router;