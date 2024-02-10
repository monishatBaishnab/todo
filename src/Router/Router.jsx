import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: 'todo/:id',
        element: <Details />
    }
])

export default Router;