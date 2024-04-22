import { motion } from "framer-motion";

const SkillCard = (props) => {
    const skillVariants = {
        initial: { opacity: 0, y: -30 },
        final: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="skillCard"
            variants={skillVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
        >
            <p className="skillName">{props.skillName}</p>
        </motion.div>
    );
};

export default SkillCard;
