import React from 'react';
import "./Final.css"

const Final = ({formatTime, time}) => {
    console.log(time)
    return (
        <div id="title_page">
            <h1 className="title">Les résultats de vos tests sont prêts</h1>

            <p className="subtitle">Cliquez sur le bouton jaune et envoyez un SMS pour connaître votre QI</p>
            <img className="mind" src="https://i.pinimg.com/originals/99/d2/67/99d267e28080ab81cd7b383ca4bc1378.png" alt=""/>
            <a className="button" onClick={()=> document.querySelector("#buttonOffer").click()}>
                Aller au test
            </a>
            <div className="timer">
                <h3>Votre temps : {formatTime(time)}</h3>
                <h3>Meilleur résultat : {time <= 923 ? <span>{formatTime(time)}</span> : <span>00:15:23</span>}</h3>
            </div>
        </div>
    );
};

export default Final;