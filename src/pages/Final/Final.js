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
                <h1>Wyniki Twoich testów są gotowe</h1>
                <p>Podobne wyniki uzyskało <span>3,1 %</span> respondentów</p>
                <h2>Kliknij w żółty przycisk i wyślij krótkiego SMS-a, aby poznać swoje wyniki</h2>
                <img src="https://i.pinimg.com/originals/6e/2e/e2/6e2ee2c6e78d4f6bc29989bed18e4943.png" alt=""/>
                <h3>Wyniki będą dostępne tylko w ciągu: <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></h3>
                <button style={{marginTop: "20px"}} className="animated-button1"
                        onClick={() => document.querySelector("#xxx").click()}>Wyślij SMS
                </button>
            </div>
            <div className="footer2">
                    <p>Koszt usługi to 30,75 PLN z VAT. Jest to opłata jednorazowa. Aktywacja usługi: Proszę wysłać SMS z tekstem IQR na numer 92571.</p>
                    <p>Jest to jednorazowa usługa IQ. Serwis informacyjny SMS pozwala użytkownikom odpowiedzieć na różne pytania w celu określenia ilorazu inteligencji i otrzymania rekomendacji dotyczących rozwoju intelektualnego.</p>
                    <p>Uzyskując dostęp do tej witryny i/lub korzystając z niej, potwierdzasz, że masz ukończone co najmniej osiemnaście lat. Aktywując usługę, potwierdzasz, że zapoznałeś się z Regulaminem i zgadzasz się na otrzymywanie od nas bezpłatnych informacji marketingowych i reklamowych.&nbsp;</p>
                    <p>Aby uzyskać więcej informacji i POMOC, możesz skontaktować się z nami pod adresem: abcmobile.pl@silverlines.info // +48 22 1253450</p>
                    <p>© 2023. ABCMobile OÜ&nbsp;</p>
                    <p>Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.</p>
                    <p>Zapoznaj się z naszym <a href="https://docs.google.com/document/d/1tsIc_Tv0E97mcKHMwGICWk4eIJsRx3k6/edit?usp=sharing" target="_blank" rel="noopener">Regulaminem</a> i <a href="https://docs.google.com/document/d/1DWnjShHxX2dEoyRr8DZi9H7Kcb6GoFpD/edit?usp=sharing" target="_blank" rel="noopener">Polityką prywatności</a></p>
                    <p>Affiliate: mobstra.com</p>
            </div>
        </div>

    );
};

export default Final;