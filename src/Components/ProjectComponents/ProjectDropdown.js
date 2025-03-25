import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const categories = [
        "Sample Category 1",
        "Sample Category 2",
        "Sample Category 3",
        "Sample Category 4",
    ];

    const list = {
        open: {
            opacity: 1,
            y: 105,
            transition: { delayChildren: 0.3, staggerChildren: 0.1 },
        },
        closed: { opacity: 0, y: -100 },
    };

    const item = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    const handleClick = (category) => {
        setIsOpen(false);
        props.onClick(category);
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
                <FaArrowRight />
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
                            onClick={() => handleClick(category)}
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

export default ProjectDropdown;
