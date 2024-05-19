import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    const location = useLocation();
    const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('signup') 
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Root;