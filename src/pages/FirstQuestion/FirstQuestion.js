import React, {useEffect, useRef} from 'react';
import './FirstQuestion.css'
import {AnimatePresence, motion} from 'framer-motion';


const FirstQuestion = ({setCounter, randomNumber}) => {


    const onclick = () => {
        setCounter(2)
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
                <div id="first" >
                    <h1 ref={fRef} style={{opacity: 0,fontSize: "24px"}}>Jaka jest średnia długość penisa w erekcji?</h1>
                    <img src="https://i.pinimg.com/originals/86/10/d9/8610d9fb3d8e59bf1e58443f0dc9bcd7.png" alt=""/>
                    <button className="one" onClick={() => onclick()}>19-21 cm.</button>
                    <button className="one" onClick={() => onclick()}>14-16 cm.</button>
                    <button className="one" onClick={() => onclick()}>11-13 cm.</button>
                </div>
            </motion.div>
        </AnimatePresence>

    );
};

export default FirstQuestion;