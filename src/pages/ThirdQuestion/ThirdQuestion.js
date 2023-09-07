import React, {useEffect, useState} from 'react';
import './ThirdQuestion.css'
import {AnimatePresence, motion} from "framer-motion";
import UserCounter from "../../components/UserCounter/UserCounter";
const ThirdQuestion = ({setCounter, randomNumber}) => {
    const [bar, setBar] = useState(0)
    const onclick = () => {
        setCounter(4)
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
                        <img className="mainImage" src="https://i.pinimg.com/originals/6a/77/17/6a7717a8a39db481aa9c3a42edec0cc3.png" alt=""/>
                        <img className="duck3"
                             src="https://i.pinimg.com/originals/3f/e6/0d/3fe60d12a8623a37370a5eb20628c990.png" alt=""
                             onClick={() => {
                                 document.querySelector(".duck3").classList.add('border')
                                 toggleBorder()
                                 setDuck(true)
                             }}/>
                        <img className="buny3"
                             src="https://i.pinimg.com/originals/67/62/56/676256e5b25bdfb7ee215c4490372450.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buny3").classList.add('border')
                                 toggleBorder2()
                                 setBuny(true)
                             }}/>
                        <img className="buterfly3"
                             src="https://i.pinimg.com/originals/32/a7/dc/32a7dc5d31dbeeded9a0c24c2da85320.png" alt=""
                             onClick={() => {
                                 document.querySelector(".buterfly3").classList.add('border')
                                 toggleBorder3()
                                 setBater(true)
                             }}/>
                        <img className="strow3"
                             src="https://i.pinimg.com/originals/be/40/d9/be40d92c6fcd8a6c395ed034045cdf41.png" alt=""
                             onClick={() => {
                                 document.querySelector(".strow3").classList.add('border')
                                 toggleBorder4()
                                 setStrow(true)
                             }}/>
                        <img className="isum3"
                             src="https://i.pinimg.com/originals/47/f0/d8/47f0d802eb29915a1b386faca325def3.png" alt=""
                             onClick={() => {
                                 document.querySelector(".isum3").classList.add('border')
                                 toggleBorder5()
                                 setIsum(true)
                             }}/>
                    </div>

                    <div className="answers">
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/3f/e6/0d/3fe60d12a8623a37370a5eb20628c990.png"
                                 alt=""/>
                            {duck && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/67/62/56/676256e5b25bdfb7ee215c4490372450.png"
                                 alt=""/>
                            {buny && <img className="finded"
                                          src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                          alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/32/a7/dc/32a7dc5d31dbeeded9a0c24c2da85320.png"
                                 alt=""/>
                            {bater && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>
                            }                        </div>
                        <div className="containerImg">
                            <img src="https://i.pinimg.com/originals/be/40/d9/be40d92c6fcd8a6c395ed034045cdf41.png"
                                 alt=""/>
                            {strow && <img className="finded"
                                           src="https://i.pinimg.com/originals/6a/2f/d6/6a2fd692e8d513c5f79cd764dbbf5ae1.png"
                                           alt=""/>}
                        </div>
                        <div className="containerImg">
                            <img  src="https://i.pinimg.com/originals/47/f0/d8/47f0d802eb29915a1b386faca325def3.png"
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

export default ThirdQuestion;