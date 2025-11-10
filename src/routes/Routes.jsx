import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])