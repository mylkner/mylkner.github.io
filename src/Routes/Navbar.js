import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <p className="navName">Mylo Faulkner</p>
                <div className="links">
                    <Link to="/" className="link homeLink">
                        Home
                    </Link>
                    <Link to="/projects" className="link projectsLink">
                        Projects
                    </Link>
                    <Link to="/skills" className="link skillsLink">
                        Skills
                    </Link>
                    <Link to="/contact" className="link contactLink">
                        Contact
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
