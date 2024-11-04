import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import "./Navbar.css"

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
    </>

    return (
        <div>
            <div className="container mx-auto navbar py-10 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="text-xl border p-3 rounded-full"><TbShoppingCart /></div>
                    <div className="text-xl border p-3 rounded-full"><FaRegHeart /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;