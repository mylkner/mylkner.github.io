import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const LinkComponent = (props) => {
    const location = useLocation();

    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavLink
                to={props.to}
                className={
                    location.pathname === props.to
                        ? "link " + props.title
                        : "link"
                }
            >
                {props.title}
            </NavLink>
        </motion.div>
    );
};
export default LinkComponent;
