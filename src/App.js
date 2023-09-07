import './App.css';
import TitlePage from "./pages/TitlePage/TitlePage";
import FirstQuestion from "./pages/FirstQuestion/FirstQuestion";
import SecondQuestion from "./pages/SecondQuestion/SecondQuestion";
import ThirdQuestion from "./pages/ThirdQuestion/ThirdQuestion";
import FourthQuestion from "./pages/FourthQuestion/FourthQuestion";
import {useEffect, useState} from "react";
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
    const [start, setStart] = useState(false)


    const [randomNumber, setRandomNumber] = useState(687);


    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (start) {
                setTime((prevTime) => prevTime + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [start]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };


    useEffect(() => {
        const interval = setInterval(() => {
            const min = 684;
            const max = 697;
            const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            setRandomNumber(generatedNumber);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="App">
            {counter === 0 && <TitlePage setCounter={setCounter} setStart={setStart}/>}
            {counter === 1 && <FirstQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 2 && <SecondQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 3 && <ThirdQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 4 && <FourthQuestion setCounter={setCounter} randomNumber={randomNumber} setStart={setStart}/>}
            {counter === 5 && <FifthQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 6 && <SixthQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 7 && <SeventhQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 8 && <EighthQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 9 && <NinthQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 10 && <TenthQuestion setCounter={setCounter} randomNumber={randomNumber}/>}
            {counter === 11 && <CalculatePage setCounter={setCounter}/>}
            {counter === 12 && <Final setCounter={setCounter} formatTime={formatTime} time={time}/>}
            {(counter > 0 && counter <= 10) &&
                <div className="timer">
                    <p> {formatTime(time)}</p>
                    <p>Meilleur résultat : <span>00:15:23</span></p>
                    <p id="counter">{counter} / 4</p>
                </div>}
        </div>
    );
}

export default App;
