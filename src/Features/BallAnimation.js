import { motion } from "framer-motion";

const BallAnimation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: window.innerWidth + 100 }}
            transition={{
                duration: Math.random() * 4 + 1,
                delay: 0.5,
                ease: "easeIn",
                repeat: Infinity,
            }}
            style={{
                position: "absolute",
                top: Math.random() * 100 + 530,
                backgroundColor: "pink",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
            }}
        />
    );
};

export default BallAnimation;
