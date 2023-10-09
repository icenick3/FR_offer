import React, {useEffect, useRef} from 'react';
import './NinthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const NinthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(10)
    }
    const fRef= useRef()
    useEffect(() => {
        if (fRef.current){
            setTimeout(()=>{
                fRef.current.style.opacity = 1
            }, 500)
        }
    }, [])
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{x: -1000}}
                animate={{x: 0,}}
                exit={{x: 1000,}}
                transition={{duration: 0.5}}
            >
                <div id="first">
                    <h1 ref={fRef} style={{opacity: 0}}>How many sexual partners does a woman typically have in her lifetime?</h1>
                    <img src="https://i.pinimg.com/originals/95/0c/b2/950cb22747552c288486a25bca8cf61b.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>From 1 to 3 sexual partners</button>
                    <button className="one" onClick={()=> onclick()}>From 4 to 8 sexual partners</button>
                    <button className="one" onClick={()=> onclick()}>From 9 to 14 sexual partners</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NinthQuestion;