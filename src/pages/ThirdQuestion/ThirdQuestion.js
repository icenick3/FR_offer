import React, {useEffect, useRef, useState} from 'react';
import './ThirdQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const ThirdQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(4)
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
                    <h1 ref={fRef} style={{opacity: 0,fontSize:"24px"}}>Jaką metodę antykoncepcji najczęściej stosujesz?</h1>
                    <img src="https://i.pinimg.com/originals/2e/66/f2/2e66f25dd9107bc3ec21c03f417246d3.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>Przerwanie stosunku</button>
                    <button className="one" onClick={()=> onclick()}>Prezerwatywy</button>
                    <button className="one" onClick={()=> onclick()}>Tabletka antykoncepcyjna</button>
                    <button className="one" onClick={()=> onclick()}>Inne</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThirdQuestion;