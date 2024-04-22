import { motion } from "framer-motion";

const BallAnimation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: window.innerWidth + 100 }}
            transition={{
                duration: Math.random() * 5 + 1,
                delay: 0.5,
                ease: "easeIn",
                repeat: Infinity,
            }}
            style={{
                position: "absolute",
                left: Math.random() * window.innerWidth,
                top: Math.random() * 100 + window.innerHeight - 80,
                backgroundColor: "pink",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
            }}
        />
    );
};

export default BallAnimation;
