import './App.css';
import TitlePage from "./pages/TitlePage/TitlePage";
import FirstQuestion from "./pages/FirstQuestion/FirstQuestion";
import SecondQuestion from "./pages/SecondQuestion/SecondQuestion";
import ThirdQuestion from "./pages/ThirdQuestion/ThirdQuestion";
import FourthQuestion from "./pages/FourthQuestion/FourthQuestion";
import React, {useEffect, useRef, useState} from "react";
import FifthQuestion from "./pages/FifthQuestion/FifthQuestion";
import SixthQuestion from "./pages/SixthQuestion/SixthQuestion";
import SeventhQuestion from "./pages/SeventhQuestion/SeventhQuestion";
import EighthQuestion from "./pages/EighthQuestion/EighthQuestion";
import NinthQuestion from "./pages/NinthQuestion/NinthQuestion";
import TenthQuestion from "./pages/TenthQuestion/TenthQuestion";
import CalculatePage from "./pages/CalculatePage/CalculatePage";
import Header from "./components/Header/Header";
import UserCounter from "./components/UserCounter/UserCounter";
import Final from "./pages/Final/Final";


function App() {
    const [counter, setCounter] = useState(0)


const refs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef()
]

    useEffect(()=>{
        if (counter > 0 && counter <= 10){
            refs[0].current.classList.add("or")
        }
        if (counter > 1 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
        }
        if (counter > 2 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
        }
        if (counter > 3 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
        }
        if (counter > 4 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
        }
        if (counter > 5 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
            refs[5].current.classList.add("or")
        }
        if (counter > 6 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
            refs[5].current.classList.add("or")
            refs[6].current.classList.add("or")
        }
        if (counter > 7 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
            refs[5].current.classList.add("or")
            refs[6].current.classList.add("or")
            refs[7].current.classList.add("or")
        }
        if (counter > 8 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
            refs[5].current.classList.add("or")
            refs[6].current.classList.add("or")
            refs[7].current.classList.add("or")
        }
        if (counter > 9 && counter <= 10){
            refs[0].current.classList.add("or")
            refs[1].current.classList.add("or")
            refs[2].current.classList.add("or")
            refs[3].current.classList.add("or")
            refs[4].current.classList.add("or")
            refs[5].current.classList.add("or")
            refs[6].current.classList.add("or")
            refs[7].current.classList.add("or")
        }
    },[counter])


    return (
        <div className="App">
            {counter === 0 && <TitlePage setCounter={setCounter}/>}
            {counter === 1 && <FirstQuestion setCounter={setCounter} />}
            {counter === 2 && <SecondQuestion setCounter={setCounter} />}
            {counter === 3 && <ThirdQuestion setCounter={setCounter} />}
            {counter === 4 && <FourthQuestion setCounter={setCounter}  />}
            {counter === 5 && <FifthQuestion setCounter={setCounter} />}
            {counter === 6 && <SixthQuestion setCounter={setCounter} />}
            {counter === 7 && <SeventhQuestion setCounter={setCounter} />}
            {counter === 8 && <EighthQuestion setCounter={setCounter} />}
            {counter === 9 && <NinthQuestion setCounter={setCounter} />}
            {counter === 10 && <TenthQuestion setCounter={setCounter} />}
            {counter === 11 && <CalculatePage setCounter={setCounter}/>}
            {counter === 12 && <Final setCounter={setCounter}/>}
            {(counter > 0 && counter <11) &&
                <div className="counter2">
                <div  className="con">
                    <div ref={refs[0]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[1]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[2]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[3]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[4]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[5]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[6]} className="bg"></div>
                </div>
                <div  className="con">
                    <div ref={refs[7]} className="bg"></div>
                </div>
            </div>}
        </div>
    );
}

export default App;
