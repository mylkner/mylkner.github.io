import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const titleVariants = {
        initial: { opacity: 0, x: -50 },
        final: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 0.7 },
        },
    };

    const divVariants = {
        initial: { opacity: 0 },
        final: {
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5,
            },
        },
    };

    return (
        <div className="contact">
            <div className="contactsTitleContainer">
                <motion.h1
                    className="contactsTitle"
                    variants={titleVariants}
                    initial="initial"
                    animate="final"
                >
                    Contact Me
                </motion.h1>
            </div>

            <motion.div
                className="contactInfo"
                variants={divVariants}
                initial="initial"
                animate="final"
            >
                <p className="howToContact">
                    Feel free to contact me at my socials below, or by email at{" "}
                    <a href="mailto:mylofaulkner27@gmail.com" className="email">
                        mylofaulkner27@gmail.com
                    </a>
                    .
                </p>
            </motion.div>

            <motion.div
                className="socials"
                variants={divVariants}
                initial="initial"
                animate="final"
            >
                <span className="line"></span>

                <span className="socialIcons">
                    <a href="https://github.com/mylkner" className="socialLink">
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/mylo-faulkner"
                        className="socialLink"
                    >
                        <FaLinkedin />
                    </a>
                </span>

                <span className="line"></span>
            </motion.div>
        </div>
    );
};

export default Contact;
