import React, {useEffect, useState} from 'react';
import './FirstQuestion.css'
import {AnimatePresence, motion} from 'framer-motion';
import UserCounter from "../../components/UserCounter/UserCounter";

const FirstQuestion = ({setCounter, randomNumber}) => {

    const [bar, setBar] = useState(0)
    const onclick = () => {
        setCounter(2)
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
                    <div className="relPhoto miniPhoto">
                        <img className="mainImage" src="https://i.pinimg.com/originals/8b/70/3a/8b703a558313f69d425c83d496fa5c46.png" alt=""/>
                        <img className="duck"
                             src="https://i.pinimg.com/originals/04/74/32/04743230cf8b016c53a2a58d957028fa.png" alt=""
                             onClick={() => {
                                 document.querySelector(".duck").classList.add('border')
                                 toggleBorder()
                                 setDuck(true)
                             }}/>
                        <img className="buny"
                             src="https://i.pinimg.com/originals/a7/b0/a7/a7b0a737426415cda79fb773e9500de2.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buny").classList.add('border')
                                 toggleBorder2()
                                 setBuny(true)
                             }}/>
                        <img className="buterfly"
                             src="https://i.pinimg.com/originals/51/2d/b6/512db6c723fec5ea0327f60165369556.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buterfly").classList.add('border')
                                 toggleBorder3()
                                 setBater(true)
                             }}/>
                        <img className="strow"
                             src="https://i.pinimg.com/originals/29/b8/dc/29b8dcbe869d6be62296c85654e7e3a7.png" alt=""
                             onClick={() => {
                                 document.querySelector(".strow").classList.add('border')
                                 toggleBorder4()
                                 setStrow(true)
                             }}/>
                        <img className="isum"
                             src="https://i.pinimg.com/originals/51/c0/41/51c04131529fe6ae1c030837e59a8139.png" alt=""
                             onClick={() => {
                                 document.querySelector(".isum").classList.add('border')
                                 toggleBorder5()
                                 setIsum(true)
                             }}/>
                    </div>

                    <div className="answers">
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/04/74/32/04743230cf8b016c53a2a58d957028fa.png"
                                 alt=""/>
                            {duck && <img className="finded"
                                  src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                  alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/a7/b0/a7/a7b0a737426415cda79fb773e9500de2.png"
                                 alt=""/>
                            {buny && <img className="finded"
                                  src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                  alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/51/2d/b6/512db6c723fec5ea0327f60165369556.png"
                                 alt=""/>
                            {bater && <img className="finded"
                                  src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                  alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/29/b8/dc/29b8dcbe869d6be62296c85654e7e3a7.png"
                                 alt=""/>
                            {strow && <img className="finded"
                                  src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                  alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img  src="https://i.pinimg.com/originals/51/c0/41/51c04131529fe6ae1c030837e59a8139.png"
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

export default FirstQuestion;