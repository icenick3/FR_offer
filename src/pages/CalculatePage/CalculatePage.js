import React, {useEffect, useState} from 'react';
import './CalculatePage.css'
import {AnimatePresence, motion} from "framer-motion";

const CalculatePage = ({setCounter}) => {

    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let interval;

        const startTimer = () => {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 1;
                    if (newProgress >= 100) {
                        clearInterval(interval);
                    }
                    return newProgress;
                });
            }, 50);
        };

        if (!active) {
            startTimer();
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                setCounter(12)
            }, 1500)
        }

        return () => {
            clearInterval(interval);
        };
    }, [progress, active]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{y: -2000,}}
                animate={{y: 0,}}
                exit={{x: 600,}}
                transition={{duration: 0.2}}
            >
                <div id="Page12">
                    <div className="circle">
                        {progress}%
                    </div>
                    <div className="results">
                        <p>
                            <img src="https://i.pinimg.com/originals/2c/9c/d8/2c9cd8b680605525b10c7666679190fe.png"
                                 alt=""/>
                            Analyzing your answers
                        </p>
                        {progress > 53 && <p>
                            <img src="https://i.pinimg.com/originals/2c/9c/d8/2c9cd8b680605525b10c7666679190fe.png"
                                 alt=""/>
                            Calculating your Sexual IQ
                        </p>}
                        {progress > 75 && <p>
                            <img src="https://i.pinimg.com/originals/2c/9c/d8/2c9cd8b680605525b10c7666679190fe.png"
                                 alt=""/>
                            Verifying the accuracy of calculations
                        </p>}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CalculatePage;