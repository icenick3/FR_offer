import React, {useEffect, useRef} from 'react';
import './SecondQuestion.css'

import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const SecondQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(3)
    }

    const fRef= useRef()
    useEffect(() => {
        console.log(fRef)
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
                    <h1 ref={fRef} style={{opacity: 0, fontSize:"22px"}}>How many orgasms can a woman experience during intercourse?</h1>
                    <img  src="https://i.pinimg.com/originals/f1/80/62/f1806226da8c46de4240f439a44a30e9.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>Only once</button>
                    <button className="one" onClick={()=> onclick()}>From 1 to 3 times</button>
                    <button className="one" onClick={()=> onclick()}>There is no limit</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;