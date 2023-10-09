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
        <div>
            <div id="final">
                <h1>Your test results are ready</h1>
                <p>Similar results were obtained by <span>3.1%</span> of respondents</p>
                <h2>Click on the yellow button and send a short SMS to get your results</h2>
                <img src="https://i.pinimg.com/originals/6e/2e/e2/6e2ee2c6e78d4f6bc29989bed18e4943.png" alt=""/>
                <h3>Results will be available only for: <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></h3>
                <button style={{marginTop: "20px",width:"70%" }} className="animated-button1"
                        onClick={() => document.querySelector("#xxx").click()}>Call
                </button>
            </div>
            <div className="footer2">
                <p>Calls cost £6/call plus your phone company’s access charge, service is for entertainment only 18+.</p>
                    <p>Customer care support@abcmobile.com&nbsp;</p>
                    <p>© 2023. ABCMobile OÜ&nbsp;</p>
                    <p>Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.</p>
                    <p>See our <a href="https://docs.google.com/document/d/1-mQ66HB6mW2NMzdmBITFSsPXgh20rP-P/edit?usp=sharing" target="_blank" rel="noopener">Terms and Conditions</a> and <a  href="https://docs.google.com/document/d/1L_BjRgkMxTBvyUpMDKaRuiX-bgXC4wowfsp94MUVzjY/edit?usp=sharing&amp;ouid=111759869835797167770&amp;rtpof=true&amp;sd=true" target="_blank" rel="noopener">Privacy Policy</a></p>
                    <p>Affiliate: mobstra.com</p>
                    <p>&nbsp;</p>
            </div>
        </div>

    );
};

export default Final;