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
        <motion.a
            className="projectContainer"
            href={props.link}
            target="_blank"
            key={props.name}
            variants={variants}
            initial="initial"
            animate="final"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="projectInfo">
                <h1 className="projectName">{props.name}</h1>
                <p className="projectDescription">{props.description}</p>
            </div>
            <div className="projectImg">
                <img src={props.image} alt={props.name} />
            </div>
        </motion.a>
    );
};

export default ProjectCard;
