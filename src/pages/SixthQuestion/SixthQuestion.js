import React, {useEffect, useRef} from 'react';
import './SixthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";


const SixthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(7)
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
                    <h1 ref={fRef} style={{opacity: 0}}>À quelle fréquence assistez-vous à des services religieux ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/6f/3e/d8/6f3ed8e980c864047508e3d147e13601.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>Au moins une fois par mois</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Chaque semaine</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Au moins une fois par an</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SixthQuestion;