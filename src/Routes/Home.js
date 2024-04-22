import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutMeText from "../Assets/aboutMeText";

const Home = () => {
    const [text, setText] = useState("");
    const count = useRef(1);

    useEffect(() => {
        if (count.current <= aboutMeText.length) {
            const timer = setTimeout(() => {
                setText(aboutMeText.slice(0, count.current));
                count.current += 1;
            }, 20);

            return () => clearTimeout(timer);
        }
    });

    const titleVariants = {
        initial: { opacity: 0 },
        final: { opacity: 1, transition: { duration: 1 } },
    };

    const articleVariants = {
        initial: { opacity: 0 },
        final: { opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
    };

    return (
        <div className="home">
            <div className="homeInfo">
                <motion.h1
                    className="homeTitle"
                    variants={titleVariants}
                    initial="initial"
                    animate="final"
                >
                    About Me
                </motion.h1>
                <motion.article
                    className="homeAbout"
                    variants={articleVariants}
                    initial="initial"
                    animate="final"
                >
                    {text}
                </motion.article>
            </div>
        </div>
    );
};

export default Home;
