import { Link, NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

    const { logOut, user } = useAuth()
    const [cart] = useCart()
    const links =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menu'}>Menu</NavLink></li>
            <li><NavLink to={'/order/salad'}>Order</NavLink></li>
            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>

        </>
    console.log(cart);
    return (
        <>
            <div className="navbar bg-opacity-90 max-w-screen-xl mx-auto px-5 bg-black z-50 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Royal Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <div className="flex justify-center items-center gap-3">
                            <Link to={'/dashboard/cart'}>
                                <button className="btn btn-ghost">
                                    <IoCart className="text-3xl" />
                                    <div className="badge">+{cart.length}</div>
                                </button>
                            </Link>
                            <span>{user?.displayName}</span>
                            <button onClick={logOut} className="btn">Logut</button>
                        </div>
                        :
                        <div className="flex gap-5">
                            <button><Link to={'/login'}>Login</Link></button>
                            <button><Link to={'/signup'}>Signup</Link></button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;