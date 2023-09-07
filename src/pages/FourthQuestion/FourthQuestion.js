import React, {useEffect, useState} from 'react';
import './FourthQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const FourthQuestion = ({setCounter, setStart}) => {
    const [bar, setBar] = useState(0)
    const onclick = () => {
        setCounter(11)
        setStart(false)
    }
    useEffect(() => {
        if (bar === 100) {
            setTimeout(() => {
                onclick();
                setStart(false)
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
                        <img className="mainImage" src="https://i.pinimg.com/originals/3b/16/50/3b1650d0ecdca1c2a8ca97a755c6414f.png" alt=""/>
                        <img className="duck4"
                             src="https://i.pinimg.com/originals/cd/ac/e0/cdace0fc8bcfce07a797b53e261fd1ad.png" alt=""
                             onClick={() => {
                                 document.querySelector(".duck4").classList.add('border')
                                 toggleBorder()
                                 setDuck(true)
                             }}/>
                        <img className="buny4"
                             src="https://i.pinimg.com/originals/17/b2/63/17b26356f5b6d8df50ae763b86e832e0.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buny4").classList.add('border')
                                 toggleBorder2()
                                 setBuny(true)
                             }}/>
                        <img className="buterfly4"
                             src="https://i.pinimg.com/originals/a3/4e/8c/a34e8cfc5920ecfb91fde53a800c682b.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buterfly4").classList.add('border')
                                 toggleBorder3()
                                 setBater(true)
                             }}/>
                        <img className="strow4"
                             src="https://i.pinimg.com/originals/32/8a/17/328a17073b48f3fbd55a6b8d82f2111b.png" alt=""
                             onClick={() => {
                                 document.querySelector(".strow4").classList.add('border')
                                 toggleBorder4()
                                 setStrow(true)
                             }}/>
                        <img className="isum4"
                             src="https://i.pinimg.com/originals/9e/91/9c/9e919cc364848267902d731b28eead68.png" alt=""
                             onClick={() => {
                                 document.querySelector(".isum4").classList.add('border')
                                 toggleBorder5()
                                 setIsum(true)
                             }}/>
                    </div>

                    <div className="answers">
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/cd/ac/e0/cdace0fc8bcfce07a797b53e261fd1ad.png"
                                 alt=""/>
                            {duck && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/17/b2/63/17b26356f5b6d8df50ae763b86e832e0.png"
                                 alt=""/>
                            {buny && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/a3/4e/8c/a34e8cfc5920ecfb91fde53a800c682b.png"
                                 alt=""/>
                            {bater && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/32/8a/17/328a17073b48f3fbd55a6b8d82f2111b.png"
                                 alt=""/>
                            {strow && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img  src="https://i.pinimg.com/originals/9e/91/9c/9e919cc364848267902d731b28eead68.png"
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

export default FourthQuestion;