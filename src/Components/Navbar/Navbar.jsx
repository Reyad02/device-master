import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/Devicemaster.png"
import { useContext, useEffect, useState } from "react";
import './Navbar.css';
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Navbar = ({ isSticky }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("/services").then(res => {
            setServices(res.data);
        })

    }, []);


    const { user, logout } = useContext(AuthContext);
    const logoutUser = () => {
        logout();
    }

    const navlink = <>
        <li><NavLink
            className="NavLink font-semibold"
            style={({ isActive, isTransitioning }) => {
                return {
                    color: isActive ? "#00AA55" : "",
                    viewTransitionName: isTransitioning ? "" : "",
                    backgroundColor: "transparent",
                };
            }}
            to="/" >Home</NavLink></li>
        <li><NavLink
            className="NavLink font-semibold"
            style={({ isActive, isTransitioning }) => {
                return {
                    color: isActive ? "#00AA55" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    backgroundColor: "transparent",
                };
            }} to="/about" >About</NavLink></li>
        <li><NavLink
            className="NavLink font-semibold"
            style={({ isActive, isTransitioning }) => {
                return {
                    color: isActive ? "#00AA55" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    backgroundColor: "transparent",
                };
            }} to="/blogs" >Blog</NavLink></li>
        <li><NavLink
            className="NavLink font-semibold"
            style={({ isActive, isTransitioning }) => {
                return {
                    color: isActive ? "#00AA55" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    backgroundColor: "transparent",
                };
            }} to="/contact" >Contact</NavLink></li>

        {
            user ? user?.email === import.meta.env.VITE_ADMIN ? <li><NavLink
                className="NavLink font-semibold"
                style={({ isActive, isTransitioning }) => {
                    return {
                        color: isActive ? "#00AA55" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        backgroundColor: "transparent",
                    };
                }} to="/admin" >Orders</NavLink></li> : <li className="hover:bg-transparent ">
                <details className="hover:bg-transparent " >
                    <summary className="font-semibold bg-transparent hover:bg-transparent transition-none ">Services</summary>
                    <ul className=" bg-white rounded-t-none p-2 mt-2">
                        {
                            services.map(service => (
                                <li className="" key={service._id}>
                                    <NavLink
                                        className="NavLink font-semibold"
                                        style={({ isActive, isTransitioning }) => ({
                                            color: isActive ? "#00AA55" : "",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                            backgroundColor: "#fff",
                                        })}
                                        to={`/services/${service._id}`} >
                                        {service.service_name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </details>
            </li> : <></>
        }

        {
            user?.email === import.meta.env.VITE_ADMIN && <li><NavLink
                className="NavLink font-semibold"
                style={({ isActive, isTransitioning }) => {
                    return {
                        color: isActive ? "#00AA55" : "",
                        viewTransitionName: isTransitioning ? "slide" : "",
                        backgroundColor: "transparent",
                    };
                }} to="/add_service" >Add Service</NavLink></li>
        }
    </>


    return (
        <div className={`relative z-50 bg-white drop-shadow-lg ${isSticky ? 'fixed top-0 w-full transition' : ''}`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost flex flex-col" to={"/"}>
                        <img src={logo} alt="" className="h-full " />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={logoutUser} className="btn bg-[#00A452] text-white border-none outline-none">Logout</button> : <Link className="btn bg-[#00A452] text-white border-none outline-none" to={"/login"}>Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;