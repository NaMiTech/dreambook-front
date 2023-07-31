import React from 'react';

export const ShowLogo = () => {
    const logo = require ('../asserts/img/logo512.png');
    return(
    <img alt="dreambook" src={String(logo)} className='logo' title="Dreambook"/>
    )
}