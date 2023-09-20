import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Odkryj swój IQ seksualne</h1>

        <p id="title_text">Odpowiedz na 10 pytań, aby dowiedzieć się, czy znasz się na sprawach seksu</p>
        <img src="https://i.pinimg.com/originals/ca/0e/19/ca0e19f00ebed6033d453523d21be05e.png" alt=""/>
        <a className="animated-button1" onClick={() => {
            setCounter(1)
        }}>
            Przejdź do testu
        </a>
    </div>);
};

export default TitlePage;