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
                    <h1 ref={fRef} style={{opacity: 0}}>Que pensez-vous de la Bible ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/39/e8/6d/39e86d9a9f833767729f29555ee02065.png" alt=""/>
                    <button className="one" onClick={() => onclick()}><span>A)</span> Je la connais et la lis régulièrement
                    </button>
                    <button className="one" onClick={() => onclick()}><span>B)</span> Je la connais, mais je ne la lis pas souvent</button>
                    <button className="one" onClick={() => onclick()}><span>C)</span> Je sais peu de choses, voire rien à son sujet</button>
                </div>
            </motion.div>
        </AnimatePresence>

    );
};

export default FirstQuestion;