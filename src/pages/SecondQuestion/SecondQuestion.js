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
                    <h1 ref={fRef} style={{opacity: 0}}>Priez-vous avant de manger ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/2b/ae/9a/2bae9a13ef5b05dcdf6b97adbb328425.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>Parfois</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Oui, toujours</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Non, jamais</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;