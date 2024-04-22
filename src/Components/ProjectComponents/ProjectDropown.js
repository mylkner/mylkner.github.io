import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ProjectDropown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const categories = ["JavaScript", "React", "D3"];

    const list = {
        open: {
            opacity: 1,
            x: 100,
            transition: { delayChildren: 0.3, staggerChildren: 0.1 },
        },
        closed: { opacity: 0, x: 72 },
    };

    const item = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    return (
        <>
            <div
                className={
                    isOpen
                        ? "projectDropdownIcon active"
                        : "projectDropdownIcon"
                }
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaArrowDown />
            </div>

            {isOpen && (
                <motion.ul
                    className="projectDropdownMenu"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={list}
                >
                    {categories.map((category) => (
                        <motion.li
                            key={category}
                            variants={item}
                            className={
                                props.currentCategory === category
                                    ? "projectDropdownItem active"
                                    : "projectDropdownItem"
                            }
                            onClick={() => props.onClick(category)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {category}
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </>
    );
};

export default ProjectDropown;
