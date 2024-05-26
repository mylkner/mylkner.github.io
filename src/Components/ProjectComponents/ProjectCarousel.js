import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = (props) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [direction, setDirection] = useState(true);

    useEffect(() => {
        setCurrentProject(0);
    }, [props.projectData]);

    const projectArray = props.projectData.map(
        ({ name, description, image, link }) => (
            <ProjectCard
                name={name}
                description={description}
                image={image}
                link={link}
                direction={direction}
            />
        )
    );

    const handleBack = () => {
        setDirection(false);
        setCurrentProject(
            (currentProject - 1 + projectArray.length) % projectArray.length
        );
    };

    const handleForward = () => {
        setDirection(true);
        setCurrentProject((currentProject + 1) % projectArray.length);
    };

    return (
        <>
            <div className="projectCarousel">
                {projectArray[currentProject]}
            </div>

            {projectArray.length > 1 && (
                <motion.div
                    className="projectIndexContainer"
                    variants={props.variants}
                    initial="initial"
                    animate="final"
                >
                    <button className="goBack" onClick={handleBack}>
                        <FaArrowLeft />
                    </button>

                    {new Array(projectArray.length).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className={
                                currentProject === i
                                    ? "projectIndex active"
                                    : "projectIndex"
                            }
                        />
                    ))}

                    <button className="goForward" onClick={handleForward}>
                        <FaArrowRight />
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default ProjectCarousel;
