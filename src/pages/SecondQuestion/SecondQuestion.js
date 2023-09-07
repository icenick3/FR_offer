import React, {useEffect, useState} from 'react';
import './SecondQuestion.css'

import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const SecondQuestion = ({setCounter, randomNumber}) => {
    const [bar, setBar] = useState(0)
    const onclick = () => {
        setCounter(3)
    }
    useEffect(() => {
        if (bar === 100) {
            setTimeout(() => {
                onclick();
            }, 500)
        }
    }, [bar])


    const [hasBorder, setHasBorder] = useState(false);
    const [hasBorder2, setHasBorder2] = useState(false);
    const [hasBorder3, setHasBorder3] = useState(false);
    const [hasBorder4, setHasBorder4] = useState(false);
    const [hasBorder5, setHasBorder5] = useState(false);

    const [duck, setDuck] = useState(false);
    const [buny, setBuny] = useState(false);
    const [bater, setBater] = useState(false);
    const [strow, setStrow] = useState(false);
    const [isum, setIsum] = useState(false);
    const toggleBorder = () => {
        if (!hasBorder) {
            setHasBorder(true);
            setBar(prevBar => prevBar + 20);
        }
    };
    const toggleBorder2 = () => {
        if (!hasBorder2) {
            setHasBorder2(true);
            setBar(prevBar => prevBar + 20);
        }
    };
    const toggleBorder3 = () => {
        if (!hasBorder3) {
            setHasBorder3(true);
            setBar(prevBar => prevBar + 20);
        }
    };
    const toggleBorder4 = () => {
        if (!hasBorder4) {
            setHasBorder4(true);
            setBar(prevBar => prevBar + 20);
        }
    };
    const toggleBorder5 = () => {
        if (!hasBorder5) {
            setHasBorder5(true);
            setBar(prevBar => prevBar + 20);
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{x: -1000}}
                animate={{x: 0,}}
                exit={{x: 1000,}}
                transition={{duration: 0.5}}
            >
                <div id="first">
                    <h1>Trouvez tous les objets de l'image</h1>
                    <div className="bar">
                        <div style={{width: `${bar}%`}}></div>
                    </div>
                    <div className="relPhoto">
                        <img className="mainImage" src="https://i.pinimg.com/originals/1f/52/95/1f5295ad73abe3430a28cd87e2e40375.png" alt=""/>
                        <img className="duck2"
                             src="https://i.pinimg.com/originals/ac/29/39/ac29398a3d3797c5fa5f6442c31db79b.png" alt=""
                             onClick={() => {
                                 document.querySelector(".duck2").classList.add('border')
                                 toggleBorder()
                                 setDuck(true)
                             }}/>
                        <img className="buny2"
                             src="https://i.pinimg.com/originals/b8/fe/e5/b8fee593f210eb5eb6f231815c1d8bba.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buny2").classList.add('border')
                                 toggleBorder2()
                                 setBuny(true)
                             }}/>
                        <img className="buterfly2"
                             src="https://i.pinimg.com/originals/ef/28/3b/ef283be9107d7aa08573fb554697f34e.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buterfly2").classList.add('border')
                                 toggleBorder3()
                                 setBater(true)
                             }}/>
                        <img className="strow2"
                             src="https://i.pinimg.com/originals/3e/6a/de/3e6adec5e7d9f10cb451704ca90ab267.png" alt=""
                             onClick={() => {
                                 document.querySelector(".strow2").classList.add('border')
                                 toggleBorder4()
                                 setStrow(true)
                             }}/>
                        <img className="isum2"
                             src="https://i.pinimg.com/originals/cf/f3/2b/cff32b43ba240255c31faaaf900329d5.png" alt=""
                             onClick={() => {
                                 document.querySelector(".isum2").classList.add('border')
                                 toggleBorder5()
                                 setIsum(true)
                             }}/>
                    </div>

                    <div className="answers">
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/ac/29/39/ac29398a3d3797c5fa5f6442c31db79b.png"
                                 alt=""/>
                            {duck && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/b8/fe/e5/b8fee593f210eb5eb6f231815c1d8bba.png"
                                 alt=""/>
                            {buny && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/ef/28/3b/ef283be9107d7aa08573fb554697f34e.png"
                                 alt=""/>
                            {bater && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/3e/6a/de/3e6adec5e7d9f10cb451704ca90ab267.png"
                                 alt=""/>
                            {strow && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img  src="https://i.pinimg.com/originals/cf/f3/2b/cff32b43ba240255c31faaaf900329d5.png"
                                  alt=""/>
                            {isum && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>
                            }                        </div>
                    </div>
                    <button onClick={() => onclick()}>
                        Plus loin
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SecondQuestion;