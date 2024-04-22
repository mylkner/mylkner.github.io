const ProjectIndexer = (props) => {
    return (
        <div
            className={props.isActive ? "projectIndex active" : "projectIndex"}
        ></div>
    );
};

export default ProjectIndexer;
