import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Découvrez votre QI sexuel</h1>

        <p id="title_text">Répondez à 10 questions pour savoir si vous vous y connaissez en matière de sexe</p>
        <img src="https://i.pinimg.com/originals/ca/0e/19/ca0e19f00ebed6033d453523d21be05e.png" alt=""/>
        <a className="animated-button1" onClick={() => {
            setCounter(1)
        }}>
            Aller au test
        </a>
    </div>);
};

export default TitlePage;