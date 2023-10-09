import React, {useEffect, useRef} from 'react';
import './TenthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const TenthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(11)
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
                    <h1 style={{opacity: 0}} ref={fRef}>How many sexual partners does a woman typically have in her lifetime?</h1>
                    <img src="https://i.pinimg.com/originals/99/a3/09/99a309c5704d857a4b3da47a5260be48.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>From 1 to 5 sexual partners</button>
                    <button className="one" onClick={()=> onclick()}>From 6 to 11 sexual partners</button>
                    <button className="one" onClick={()=> onclick()}>From 12 to 17 sexual partners</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TenthQuestion;