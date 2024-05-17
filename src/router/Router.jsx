import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Menu from "../pages/Menu/Menu";

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
            }
        ]
    }
])
export default Router;