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
                    <h1 ref={fRef} style={{opacity: 0}}>Quel est le nom de la ville où Jésus est né ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/84/b5/3d/84b53d9b28ab0db69e7e18f80a74274a.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>Bethléem</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Nazareth</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Jérusalem</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ThirdQuestion;