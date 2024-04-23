import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useScreenWidth from "../Hooks/useScreenWidth";

const BallAnimation = () => {
    const screenWidth = useScreenWidth();
    const [aniKey, setAniKey] = useState(0);

    useEffect(() => {
        setAniKey((anikey) => (anikey ? 0 : 1));
    }, [screenWidth]);

    return (
        <motion.div
            key={aniKey}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: screenWidth + 100 }}
            transition={{
                duration: Math.random() * 1.8 + 1,
                delay: 0.5,
                ease: "easeIn",
                repeat: Infinity,
            }}
            style={{
                position: "absolute",
                top: Math.random() * 80,
                backgroundColor: Math.random() >= 0.5 ? "#ff94d5" : "#e20071",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
            }}
        />
    );
};

export default BallAnimation;
