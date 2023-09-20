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
                    <h1 ref={fRef} style={{opacity: 0}}>Quel est l'endroit le plus courant pour avoir des relations sexuelles après la chambre à coucher
                        ?</h1>
                    <div style={{marginTop: "220px"}}>
                        <img src="https://i.pinimg.com/originals/d5/dc/95/d5dc9543709d19aeb8a78d0b34041e3e.png" alt=""
                             onClick={() => onclick()}/>
                        <img src="https://i.pinimg.com/originals/1a/b6/ff/1ab6ffda31045a21234f233c79eb7c5d.png" alt=""
                             onClick={() => onclick()}/>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/de/47/c5/de47c560887c0f843445a6e50aeb1bef.png" alt=""
                             onClick={() => onclick()}/>
                        <img src="https://i.pinimg.com/originals/5a/4f/ff/5a4fff4a8f0a7d85b300763a618878ce.png" alt=""
                             onClick={() => onclick()}/>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SixthQuestion;