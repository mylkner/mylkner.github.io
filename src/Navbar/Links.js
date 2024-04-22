import LinkComponent from "../Components/LinkComponent.js";
import navRoutes from "../Assets/navRoutes.js";

const Links = () => {
    return (
        <div className="links">
            {navRoutes.map((link) => (
                <LinkComponent
                    key={link.title}
                    to={link.to}
                    title={link.title}
                />
            ))}
        </div>
    );
};

export default Links;
