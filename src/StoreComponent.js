import React from 'react';

export const StoreComponent = () => {
    const googlePlay = require ('./asserts/img/google-play-badge.png');
    return(
        <>
        <div className="row align-items-center">
            <div className="col">
            <a href="/"><img alt="Google Play" src={String(googlePlay)} className="img-fluid store-icon"/></a>
            
            </div>

        </div>
        <span className='legal-text'>Google Play y el logotipo de Google Play son marcas comerciales de Google LLC.</span>

        </>
        );
}