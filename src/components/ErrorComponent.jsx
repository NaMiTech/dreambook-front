import React from 'react';

export const ErrorComponent = ({text} = "Desconocido") => {
    return(
        <>
          <div className="errorCloud">
            <h3 className="btn-shine">Error</h3>
            <p>{text}</p>
          </div>    
        </>
      )
}