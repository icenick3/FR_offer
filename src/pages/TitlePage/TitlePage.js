import React, {useEffect, useState} from 'react';
import './TitlePage.css'
import axios from "axios";

const TitlePage = ({setCounter}) => {


    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isPC = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


    return (<div id="title_page">
        <h1>Discover Your Sexual IQ</h1>

        <p id="title_text">Answer 10 questions to find out how well you know about sexual matters</p>
        <img src="https://i.pinimg.com/originals/ca/0e/19/ca0e19f00ebed6033d453523d21be05e.png" alt=""/>
        <a className="animated-button1" onClick={() => {
            setCounter(1)
        }}>
            Go to the test
        </a>
    </div>);
};

export default TitlePage;