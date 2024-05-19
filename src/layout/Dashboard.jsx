import { FaBookmark, FaFile, FaHome, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu p-5 space-y-2">
                    <li className="text-xl"><NavLink to={'/dashboard/home'}> <FaHome/> Home</NavLink></li>
                    <li className="text-xl"><NavLink to={'/dashboard/reservation'}> <FaCalendar/> Reservation</NavLink></li>
                    <li className="text-xl"><NavLink to={'/dashboard/review'}> <FaStar/> Review</NavLink></li>
                    <li className="text-xl"><NavLink to={'/dashboard/cart'}> <FaShoppingCart/> My Cart ({cart.length})</NavLink></li>
                    <li className="text-xl"><NavLink to={'/dashboard/bookings'}> <FaBookmark/> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li className="text-xl"><NavLink to={'/'}> <FaHome/> Home</NavLink></li>
                    <li className="text-xl"><NavLink to={'/order/salad'}> <FaFile/> Menu </NavLink></li>
                </ul>
            </div>
            <div className="flex-grow p-8">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;