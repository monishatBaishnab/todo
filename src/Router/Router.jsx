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
    },
    {
        path: 'todo/:id',
        element: <Details />
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
        element: <PrivateRoute><EditTodo /></PrivateRoute>
    }
])

export default Router;