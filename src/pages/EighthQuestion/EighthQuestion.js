import React, {useEffect, useRef} from 'react';
import './EighthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const EighthQuestion = ({setCounter, randomNumber}) => {

    const onclick = () => {
        setCounter(9)
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
                    <h1 ref={fRef} style={{opacity: 0,fontSize:"24px",paddingTop:"50px"}}>What is the average duration of sexual intercourse?</h1>
                    <img src="https://i.pinimg.com/originals/58/6c/71/586c71143e53b63e8df665c4a913839b.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>2 to 5 minutes</button>
                    <button className="one" onClick={()=> onclick()}>5 to 15 minutes</button>
                    <button className="one" onClick={()=> onclick()}>15 to 30 minutes</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default EighthQuestion;