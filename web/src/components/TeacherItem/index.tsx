import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://pbs.twimg.com/profile_images/969383178279538688/io6WpxVE_400x400.jpg" alt="T'Challa"/>
            <div>
                <strong>T'Challa</strong>
                <span>Black Culture</span>
            </div>
        </header>
        
        <p>
            Mussum Ipsum, cacilds vidis litro abertis
            <br /><br />
            Pra lá , depois divoltis porris, paradis. Mé faiz elementum girarzis, nisi eros vermeio. Per aumento de cachacis, eu reclamis. Sapien in monti palavris qui num significa nadis i pareci latim.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}

export default TeacherItem;