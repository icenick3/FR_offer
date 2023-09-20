import React, {useEffect, useRef} from 'react';
import './FifthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";


const FifthQuestion = ({setCounter}) => {

    const onclick = () => {
        setCounter(6)
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
                    <h1 ref={fRef} style={{opacity: 0}}>Czy istnieje związek między rozmiarem buta a rozmiarem penisa u mężczyzny?</h1>
                    <img src="https://i.pinimg.com/originals/38/5d/5f/385d5f9d2857e6eef64d425fef625b81.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>Oczywiście</button>
                    <button className="one" onClick={()=> onclick()}>Absolutnie nie</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FifthQuestion;