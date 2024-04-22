import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ProjectIndex from "./ProjectIndex";

const ProjectCarousel = (props) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [direction, setDirection] = useState(null);

    const projectArray = props.projectData.map(
        ({ name, description, image }) => (
            <ProjectCard
                name={name}
                description={description}
                image={image}
                direction={direction}
            />
        )
    );

    const handleBack = () => {
        setDirection(true);
        setCurrentProject(
            (currentProject - 1 + projectArray.length) % projectArray.length
        );
    };

    const handleForward = () => {
        setDirection(false);
        setCurrentProject((currentProject + 1) % projectArray.length);
    };

    return (
        <>
            <div className="projectCarousel">
                <motion.button
                    className="goBack"
                    onClick={handleBack}
                    variants={props.variants}
                    initial="initial"
                    animate="final"
                >
                    <FaArrowLeft />
                </motion.button>

                {projectArray[currentProject]}

                <motion.button
                    className="goForward"
                    onClick={handleForward}
                    variants={props.variants}
                    initial="initial"
                    animate="final"
                >
                    <FaArrowRight />
                </motion.button>
            </div>
            <div className="projectIndexContainer">
                {new Array(projectArray.length).fill(0).map((_, i) => (
                    <ProjectIndex key={i} isActive={i === currentProject} />
                ))}
            </div>
            ;
        </>
    );
};

export default ProjectCarousel;
