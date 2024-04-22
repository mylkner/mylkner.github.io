import { useState } from "react";
import { motion } from "framer-motion";
import {
    javaScriptProjectData,
    reactProjectData,
    d3ProjectData,
} from "../Assets/projectData.js";
import ProjectCarousel from "../Components/ProjectComponents/ProjectCarousel.js";
import ProjectDropown from "../Components/ProjectComponents/ProjectDropown.js";

const Projects = () => {
    const [projectCategory, setProjectCategory] = useState("JavaScript");

    const projectDataMap = {
        JavaScript: javaScriptProjectData,
        React: reactProjectData,
        D3: d3ProjectData,
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
                <span className="projectCategoryDropdown">
                    <h2 className="projectCategory">{projectCategory}</h2>
                    <ProjectDropown
                        onClick={handleClick}
                        currentCategory={projectCategory}
                    />
                </span>
            </motion.div>

            <ProjectCarousel
                projectData={projectDataMap[projectCategory]}
                variants={variants}
            />
        </div>
    );
};

export default Projects;
