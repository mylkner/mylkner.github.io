import { motion } from "framer-motion";

const ProjectCard = (props) => {
    const variants = {
        initial: { opacity: 0, x: props.direction ? 500 : -500 },
        final: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1 },
        },
    };

    return (
        <motion.div
            className="projectContainer"
            key={props.name}
            variants={variants}
            initial="initial"
            animate="final"
        >
            <div className="projectInfo">
                <h1 className="projectName">{props.name}</h1>
                <p className="projectDescription">{props.description}</p>
            </div>
            <div className="projectImg">
                <img src={props.image} alt={props.name} />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
