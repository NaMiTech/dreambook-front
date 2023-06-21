import React from 'react';
import { useSelector } from 'react-redux';
import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';

export const StadisticComponent = ({data}) => {
    const {MonthQuery} = data;

    console.log(MonthQuery);
    const selectMonth = useSelector((state)=>state.date.month);
    const selectYear = useSelector((state)=>state.date.year);

    if(MonthQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(MonthQuery.isError){return (<ErrorComponent/>)}      
    if(!MonthQuery.data){return(<NoDataComponent/>)}

    //ToDo: Recibir esto desde la API
    const payload = {
        positive: 93,
        negative:7,
        top: ["veía", "puerta", "operación"]
    }

    return(
        <>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Positivos</h3>
                    <span className="badge rounded-pill text-bg-success">{payload.positive}%</span>
                    
                </div>
                <div className="col">
                    <h3>Top de temas en {selectMonth} del {selectYear}</h3>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {payload.top.map((topic, i) => <li className="list-group-item" key={i}>{topic}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Negativos</h3>
                    <span className="badge rounded-pill text-bg-danger">{payload.negative}%</span>
                </div>
            </div>
            </div>
        </>
    )
}