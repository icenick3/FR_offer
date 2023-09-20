import React, {useEffect, useRef} from 'react';
import './NinthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const NinthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(10)
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
                    <h1 ref={fRef} style={{opacity: 0}}>Combien de partenaires sexuels en moyenne une femme a-t-elle au cours de sa vie ?</h1>
                    <img src="https://i.pinimg.com/originals/95/0c/b2/950cb22747552c288486a25bca8cf61b.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>1 à 3 partenaires sexuels</button>
                    <button className="one" onClick={()=> onclick()}>4 à 8 partenaires sexuels</button>
                    <button className="one" onClick={()=> onclick()}>9 à 14 partenaires sexuels</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NinthQuestion;