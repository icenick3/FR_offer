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
                    <h1 ref={fRef} style={{opacity: 0}}>Quel est le contenu pornographique le plus demandé par les femmes en Europe ?</h1>
                    <img src="https://i.pinimg.com/originals/3b/22/5e/3b225e8296254cd091cd271a5df8d30a.png" alt=""/>
                    <button className="one" onClick={()=> onclick()}>Mulâtres</button>
                    <button className="one" onClick={()=> onclick()}>Porno lesbien</button>
                    <button className="one" onClick={()=> onclick()}>Sexe anal</button>
                    <button className="one" onClick={()=> onclick()}>Hentai</button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FourthQuestion;