import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

const Router = createBrowserRouter([
    {
        path :"/",
        element : <Root/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/menu',
                element : <Menu/>
            },
            {
                path : '/order/:category',
                element : <PrivetRoute><Order/></PrivetRoute>
            },
            {
                path:'/login',
                element : <Login/>
            },
            {
                path:'/signup',
                element : <SignUp/>
            }
        ]
    },
    {
        path:'/dashboard',
        element : <Dashboard/>,
        children : [
            {
                path : '/dashboard/cart',
                element : <Cart/>
            }
        ]
    }
])
export default Router;