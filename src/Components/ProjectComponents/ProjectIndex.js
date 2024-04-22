const ProjectIndex = (props) => {
    return (
        <div
            className={props.isActive ? "projectIndex active" : "projectIndex"}
        ></div>
    );
};

export default ProjectIndex;
