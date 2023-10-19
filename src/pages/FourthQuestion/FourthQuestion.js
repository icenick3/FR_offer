import React, {useEffect, useRef} from 'react';
import './FourthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const FourthQuestion = ({setCounter}) => {

    const onclick = () => {
        setCounter(5)
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
                    <h1 ref={fRef} style={{opacity: 0}}>Comment voyez-vous la question de la vie après la mort ?</h1>
                    <img className="image-test" src="https://i.pinimg.com/originals/60/9b/73/609b731103b878e33c67f007e8cc7ef9.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}><span>A)</span>J'ai des doutes</button>
                    <button className="one" onClick={()=> onclick()}><span>B)</span>Je crois en la vie éternelle</button>
                    <button className="one" onClick={()=> onclick()}><span>C)</span>Je ne crois pas à la vie après la mort</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FourthQuestion;