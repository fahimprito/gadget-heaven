import { FaBars } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
// import "./Navbar.css"

const Navbar = () => {
    const location = useLocation();

    const homeLocation = location.pathname === '/';
    const categoryLocation = location.pathname.startsWith('/category');
    const navBarStyle = homeLocation || categoryLocation ? 'bg-[#9538E2] text-white rounded-3xl z-10' : '';
    const mobileTab = homeLocation || categoryLocation ? 'text-black' : '';
    const cartWishIcon = homeLocation || categoryLocation ? 'bg-base-200 text-black' : '';

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        <li><NavLink to={"/faq"}>FAQ</NavLink></li>
    </>

    return (
        <div className={`mx-4 lg:mx-10 mt-6 ${navBarStyle}`}>
            <div className="container mx-auto navbar pb-10 pt-4 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${mobileTab}`}>
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-8 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {/* cart icon  */}
                    <Link to={"/dashboard/cart"}>
                        <div className={`relative text-xl border p-3 rounded-full ${cartWishIcon}`}>
                            <TbShoppingCart />
                            <span className="absolute -top-3 left-7 badge text-xs bg-red-100 border border-red-400">
                                3
                            </span>
                        </div>
                    </Link>
                    
                    {/* wish  */}
                    <Link to={"/dashboard/wishlist"}>
                        <div className={`relative text-xl border p-3 rounded-full ${cartWishIcon}`}>
                            <FaRegHeart />
                            <span className="absolute -top-3 left-7 badge text-xs bg-red-100 border border-red-400">
                                5
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;