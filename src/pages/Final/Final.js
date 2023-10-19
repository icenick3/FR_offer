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
                <h1>Les résultats de vos tests <span>sont prêts</span></h1>
                <h2>Cliquez sur le bouton jaune pour envoyer un SMS et découvrir à quel point vous êtes chrétien</h2>
                <img className="logo" src="https://i.pinimg.com/originals/5e/5b/f1/5e5bf1282bbea15aeb85863abdaf173d.png"
                     alt=""/>
                <button className="animated-button1 final-btn"
                        onClick={() => document.querySelector("#xxx").click()}>Envoyer un SMS
                </button>
                <h3>Les résultats seront disponibles dans
                    les: <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></h3>
                <h4>Niveau de <span> christianisme </span>:</h4>
                <img className="shkala"
                     src="https://i.pinimg.com/originals/08/b5/0f/08b50fff19c8aefba46724da7e052f9f.png" alt=""/>
                <img className="resik"
                     src="https://i.pinimg.com/originals/dd/cb/99/ddcb99e42d7b0add6b9cad4ff5efb91f.png" alt=""/>
            </div>
        {/*    <div className="footer2">*/}
        {/*        <div className="pricing_box">*/}
        {/*            <p className="mo_text font-11">*/}
        {/*<span>Après s'être abonné à Space Games,*/}
        {/*                l'utilisateur a la possibilité de jouer à tous les jeux prévus.*/}
        {/*                4.50 EUR + PRIX D'UN SMS. Le prix indiqué comprend la TVA. Les frais ne comprennent pas l'utilisation*/}
        {/*                d'Internet mobile. L'envoi du SMS MO sera facturé selon votre modèle tarifaire. Telephone hotline:*/}
        {/*                +33 170700354 or on the e-mail support <a className="mo_text font-11"*/}
        {/*                                                          href="mailto:spacegames.fr@silverlines.info">spacegames.fr@silverlines.info</a></span>*/}
        {/*            </p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="footer2">*/}
        {/*        <div className="pricing_box">*/}
        {/*            <p className="mo_text font-11">*/}
        {/*<span>Après s'être abonné à Space Games,*/}
        {/*                l'utilisateur a la possibilité de jouer à tous les jeux prévus.*/}
        {/*                4.50 EUR + PRIX D'UN SMS. Le prix indiqué comprend la TVA. Les frais ne comprennent pas l'utilisation*/}
        {/*                d'Internet mobile. L'envoi du SMS MO sera facturé selon votre modèle tarifaire. Telephone hotline:*/}
        {/*                +33 170700354 or on the e-mail support <a className="mo_text font-11"*/}
        {/*                                                          href="mailto:spacegames.fr@silverlines.info">spacegames.fr@silverlines.info</a></span>*/}
        {/*            </p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        </div>

    );
};

export default Final;