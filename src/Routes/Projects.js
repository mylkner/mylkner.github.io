import { useState } from "react";
import { motion } from "framer-motion";
import {
    sampleCategory1,
    sampleCategory2,
    sampleCategory3,
    sampleCategory4,
} from "../Assets/projectData.js";
import ProjectCarousel from "../Components/ProjectComponents/ProjectCarousel.js";
import ProjectDropdown from "../Components/ProjectComponents/ProjectDropdown.js";

const Projects = () => {
    const [projectCategory, setProjectCategory] = useState("Sample Category 1");

    const projectDataMap = {
        "Sample Category 1": sampleCategory1,
        "Sample Category 2": sampleCategory2,
        "Sample Category 3": sampleCategory3,
        "Sample Category 4": sampleCategory4,
    };

    const variants = {
        initial: { opacity: 0 },
        final: { opacity: 1, transition: { delay: 0.5, duration: 0.7 } },
    };

    const handleClick = (category) => {
        setProjectCategory(category);
    };

    return (
        <div className="projects">
            <motion.div
                className="projectsTitleContainer"
                variants={variants}
                initial="initial"
                animate="final"
            >
                <h1 className="projectsTitle">Projects</h1>
            </motion.div>

            <motion.span
                className="projectCategoryDropdown"
                variants={variants}
                initial="initial"
                animate="final"
            >
                <ProjectDropdown
                    onClick={handleClick}
                    currentCategory={projectCategory}
                />
                <h2 className="projectCategory">{projectCategory}</h2>
            </motion.span>

            <ProjectCarousel
                projectData={projectDataMap[projectCategory]}
                variants={variants}
            />
        </div>
    );
};

export default Projects;
