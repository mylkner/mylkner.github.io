import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Dropdown from "./Dropdown.js";
import Links from "./Links.js";

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <nav className="navbar">
                <p className="navName">Mylo Faulkner</p>
                {screenWidth >= 780 ? (
                    <>
                        <Links />
                        <Dropdown />
                    </>
                ) : (
                    <Dropdown />
                )}
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
