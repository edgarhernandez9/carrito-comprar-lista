import React from 'react';

import '../../theme/InfoCompas.css';

export const InfoCompras = (props) => {

    const { 
        textParrafo, 
        textLabel,
        styleParrafo,
        styleLabel,
        styleContainerInfoCompras
    } = props;

    return (
        <div className="contanerInfoCompras" style={{ ...styleContainerInfoCompras}}>
            <p style={{ ...styleParrafo }} >{ textParrafo }</p>
            <label style={{ ...styleLabel }} >{ textLabel }</label>
        </div>
    )
}
