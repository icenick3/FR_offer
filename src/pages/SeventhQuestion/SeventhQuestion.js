import React, {useEffect, useRef} from 'react';
import './SeventhQuestion.css'
import {AnimatePresence, motion} from "framer-motion";

const SeventhQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(8)
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
                    <h1 ref={fRef} style={{opacity: 0}}>Quel est le pourcentage de personnes en France qui aimeraient pratiquer le BDSM ?</h1>
                    <img src="https://i.pinimg.com/originals/6a/12/3b/6a123b6bdc6b97eb16ca8dde9ca59320.png" alt=""/>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>42% de femmes et 56% d'hommes</button>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>30% de femmes et 34% d'hommes</button>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>13% de femmes et 17% d'hommes</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;