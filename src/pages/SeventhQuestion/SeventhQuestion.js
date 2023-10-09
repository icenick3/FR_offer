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
                    <h1 ref={fRef} style={{opacity: 0}}>What percentage of people in England would like to practice BDSM?</h1>
                    <img src="https://i.pinimg.com/originals/6a/12/3b/6a123b6bdc6b97eb16ca8dde9ca59320.png" alt=""/>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>42% of women and 56% of men</button>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>30% of women and 34% of men</button>
                    <button style={{fontSize:"13px"}} className="one" onClick={()=> onclick()}>13% of women and 17% of men</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;