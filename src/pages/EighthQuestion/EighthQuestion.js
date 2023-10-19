import React, {useEffect, useRef} from 'react';
import './EighthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const EighthQuestion = ({setCounter, randomNumber}) => {

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
                    <h1 ref={fRef} style={{opacity: 0}}>Quel âge avez-vous ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/e4/5a/86/e45a8673de479ea5a3892e2b232668c8.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>13 à 18 ans</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>de 19 à 35 ans</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>36 à 55 ans</button>
                    <button className="one" onClick={()=> onclick()}><span>D)</span>plus de 55 ans</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default EighthQuestion;