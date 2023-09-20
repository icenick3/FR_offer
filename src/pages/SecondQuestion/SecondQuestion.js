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
                    <h1 ref={fRef} style={{opacity: 0,fontSize:"22px"}}>Ile orgazmów kobieta może doświadczyć podczas stosunku?</h1>
                    <img  src="https://i.pinimg.com/originals/f1/80/62/f1806226da8c46de4240f439a44a30e9.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>Tylko raz</button>
                    <button className="one" onClick={()=> onclick()}>Od 1 do 3 razy</button>
                    <button className="one" onClick={()=> onclick()}>Nie ma ograniczeń</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;