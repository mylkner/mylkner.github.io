import { Outlet } from "react-router-dom";
import useScreenWidth from "../Hooks/useScreenWidth.js";
import Dropdown from "./Dropdown.js";
import Links from "./Links.js";

const Navbar = () => {
    const screenWidth = useScreenWidth();

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
