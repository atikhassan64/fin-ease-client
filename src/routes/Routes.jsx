import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "./PrivateRoute";
import MyTransactions from "../pages/Transactions/MyTransactions";
import AddTransaction from "../pages/Transactions/AddTransaction";
import Reports from "../pages/Transactions/Reports";
import Details from "../pages/Transactions/Details";

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
            },
            {
                path: 'my-transactions',
                element: <PrivateRoute><MyTransactions></MyTransactions></PrivateRoute>
            },
            {
                path: 'add-transaction',
                element: <PrivateRoute><AddTransaction></AddTransaction></PrivateRoute>
            },
            {
                path: 'reports',
                element: <PrivateRoute><Reports></Reports></PrivateRoute>
            },
            {
                path: 'details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/transactions/${params.id}`),
                element: <PrivateRoute><Details></Details></PrivateRoute>
            }
        ]
    }
])