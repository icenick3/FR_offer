import React, {useEffect, useRef} from 'react';
import './TenthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";

const TenthQuestion = ({setCounter, randomNumber}) => {
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
                    <h1 style={{opacity: 0}} ref={fRef}>Combien de partenaires sexuels en moyenne une femme a-t-elle au cours de sa vie ?</h1>
                    <img src="https://i.pinimg.com/originals/99/a3/09/99a309c5704d857a4b3da47a5260be48.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>1 à 5 partenaires sexuels</button>
                    <button className="one" onClick={()=> onclick()}>6 à 11 partenaires sexuels</button>
                    <button className="one" onClick={()=> onclick()}>12 à 17 partenaires sexuels</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TenthQuestion;