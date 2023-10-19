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
                    <h1 ref={fRef} style={{opacity: 0}}>Que s'est-il passé le septième jour de la création dans la Bible ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/48/9e/ef/489eef42567eea56ee612bf4ab0d915e.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>Un homme a été créé</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Dieu s'est reposé de son travail</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Animaux créés</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FifthQuestion;