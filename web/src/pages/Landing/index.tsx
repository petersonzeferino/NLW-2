import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing () {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos</h2>
                </div>

                <img src={landingImg} 
                     alt="Plataforma de estudos online" 
                     className="hero-image"/>

                <div className="buttons-container">
                    <a href={studyIcon} className="study"></a>
                </div>

                <div className="buttons-container">
                    <a href={giveClassesIcon} className="give-classes"></a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas images <img src={purpleHeartIcon} alt="Coração"/>
                </span>
            </div>
        </div>
    )
}

export default Landing