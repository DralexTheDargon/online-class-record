import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Admin from "./views/Admin";
import Studentview from "./views/Studentview";
import Registration from "./views/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/studentview',
        element: <Studentview />
    },
    {
        path: '/registration',
        element: <Registration />
    },
])

export default router