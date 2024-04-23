import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";
import LinkComponent from "../Components/LinkComponent";
import navRoutes from "../Assets/navRoutes";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const list = {
        open: {
            opacity: 1,
            x: -10,
            transition: { delayChildren: 0.3, staggerChildren: 0.1 },
        },
        closed: { opacity: 0, x: 20 },
    };

    const item = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    return (
        <>
            <div className="dropdownIcon" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <RxHamburgerMenu /> : <FaX />}
            </div>

            {isOpen && (
                <motion.ul
                    className="dropdownMenu"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={list}
                >
                    {navRoutes.map((link) => (
                        <motion.li
                            key={link.title}
                            variants={item}
                            className="dropdownItem"
                            onClick={() => setIsOpen(false)}
                        >
                            <LinkComponent to={link.to} title={link.title} />
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </>
    );
};

export default Sidebar;
