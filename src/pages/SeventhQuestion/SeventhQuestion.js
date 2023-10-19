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
                    <h1 ref={fRef} style={{opacity: 0}}>Que pensez-vous des autres religions et croyances ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/82/d4/4c/82d44ceba2746317954bf07cf6a86c84.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>Je considère que ma religion est la seule bonne</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Cela ne m'intéresse pas</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Je respecte toutes les religions </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};


export default SeventhQuestion;