import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Quel est votre degré de <span>christianisme</span> ?</h1>

        <p id="title_text">Répondez à 8 questions pour savoir si vous êtes un vrai chrétien</p>
        <img src="https://i.pinimg.com/originals/2d/34/65/2d34652d48e6a9fd363b3ca51e57331a.png" alt=""/>
        <a className="animated-button1" onClick={() => {
            setCounter(1)
        }}>
            Aller un test
        </a>
    </div>);
};

export default TitlePage;