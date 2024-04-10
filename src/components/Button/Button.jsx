import React from 'react';
import '../../theme/Buton.css'

export const Button = ({ type, name, stylesBtn, active = false, onClick = () => {}, typeButton='button' }) => {


    return (
        <div className="btn-container">
            <button type={ typeButton } className={`btn btn-${type} `} style={ stylesBtn } onClick={ () => onClick()}>
                { name }
            </button>
            {
                active && type === ("secondary" || "primary") &&
                <label className="active-btn"></label>
            }
        </div>
        
    )
}