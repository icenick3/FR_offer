import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter, setStart}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Découvrez <span>votre QI</span> grâce à une nouvelle méthodologie</h1>

        <p id="title_text">Trouvez tous les objets de l'image le plus rapidement possible</p>
        <img src="https://i.pinimg.com/originals/14/d4/d4/14d4d440013ff016ba10730e897b53ef.png" alt=""/>
        <a className="animated-button1" onClick={() => {
            setCounter(1)
            setStart(true)
        }}>
            Aller au test
        </a>
        <p className="affterText">Important : le temps et le nombre de tentatives sont pris en compte.</p>
    </div>);
};

export default TitlePage;