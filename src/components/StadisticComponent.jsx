import React from 'react';

export const StadisticComponent = () => {
    return(
        <>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Positivos</h3>
                    <span className="badge rounded-pill text-bg-success">93%</span>
                    
                </div>
                <div className="col">
                    <h3>Top de temas</h3>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Top de temas</h3>
                    <span className="badge rounded-pill text-bg-danger">7%</span>
                </div>
            </div>
            </div>
        </>
    )
}