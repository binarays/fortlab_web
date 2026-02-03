import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'left' | 'right';
}

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({ children, delay = 0, direction = 'up' }) => {
    const hidden = {
        opacity: 0,
        y: direction === 'up' ? 50 : 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    };

    const visible = {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
        },
    };

    return (
        <motion.div
            initial={hidden}
            whileInView={visible}
            viewport={{ once: true, margin: '-100px' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedReveal;
