import { motion } from "framer-motion";
import skills from "../Assets/skillData.js";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
    const titleVariants = {
        initial: { opacity: 0, y: -50 },
        final: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 0.7 },
        },
    };

    const skillContainerVariants = {
        initial: { opacity: 0 },
        final: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.11,
            },
        },
    };

    return (
        <div className="skills">
            <div className="skillsTitleContainer">
                <motion.h1
                    variants={titleVariants}
                    initial="initial"
                    animate="final"
                    className="skillsTitle"
                >
                    Skills
                </motion.h1>
            </div>

            <motion.div
                className="skillCardContainer"
                variants={skillContainerVariants}
                initial="initial"
                animate="final"
            >
                {skills.map((skill) => (
                    <SkillCard key={skill} skillName={skill} />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
