import React, {useEffect, useState} from 'react';
import "./Final.css"

const Final = () => {
    const [minutes, setMinutes] = useState(3);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
            } else {
                if (seconds === 0) {
                    setMinutes(prevMinutes => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);
    return (
        <div id="final">
            <h1>Les résultats de vos tests sont prêts</h1>
            <p>Des résultats similaires ont été obtenus par <span>3,1 %</span> des répondants</p>
            <h2>Cliquez sur le bouton jaune et envoyez un court SMS pour connaître vos résultats</h2>
            <img src="https://i.pinimg.com/originals/6e/2e/e2/6e2ee2c6e78d4f6bc29989bed18e4943.png" alt=""/>
            <h3>Les résultats seront disponibles uniquement
                : <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></h3>
            <button style={{marginTop: "20px"}} className="animated-button1"
                    onClick={() => document.querySelector("#xxx").click()}>Envoyer un SMS
            </button>
        </div>
    );
};

export default Final;