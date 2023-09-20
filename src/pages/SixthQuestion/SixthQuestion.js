import React, {useEffect, useRef} from 'react';
import './SixthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";


const SixthQuestion = ({setCounter, randomNumber}) => {
    const onclick = () => {
        setCounter(7)
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
                    <h1 ref={fRef} style={{opacity: 0}}>Jakie jest najczęstsze miejsce na odbywanie stosunku poza sypialnią?</h1>
                    <div style={{marginTop: "220px"}}>
                        <div>
                            <img src="https://i.pinimg.com/originals/fe/2d/23/fe2d2302621bb894509d580e91f10491.png" alt=""
                                 onClick={() => onclick()}/>
                            <p>Samochód</p>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/originals/8d/e3/c9/8de3c9c8ba7a0cef281d120c2885c0d7.png" alt=""
                                 onClick={() => onclick()}/>
                            <p>Publiczne toalety</p>
                        </div>

                    </div>
                    <div>
                       <div>
                           <img src="https://i.pinimg.com/originals/a9/3f/29/a93f29f7715e92c6089b5551666e3c79.png" alt=""
                                onClick={() => onclick()}/>
                           <p>Nature</p>
                       </div>
                        <div>
                            <img src="https://i.pinimg.com/originals/01/6f/eb/016febe869b45c595e0fe42155ccaeed.png" alt=""
                                 onClick={() => onclick()}/>
                            <p>Kuchnia</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SixthQuestion;