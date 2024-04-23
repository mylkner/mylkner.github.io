import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutMeText from "../Assets/aboutMeText";

const Home = () => {
    const [text, setText] = useState("");
    const count = useRef(1);
    const timeout = count.current === 1 ? 700 : 20;

    useEffect(() => {
        if (count.current <= aboutMeText.length) {
            const timer = setTimeout(() => {
                setText(aboutMeText.slice(0, count.current));
                count.current += 1;
            }, timeout);

            return () => clearTimeout(timer);
        }
    });

    const titleVariants = {
        initial: { opacity: 0, x: -100 },
        final: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 0.7 },
        },
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
                <article className="homeAbout">{text}</article>
            </div>
        </div>
    );
};

export default Home;
