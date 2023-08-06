import React from 'react';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';
import { useMonth } from '../hooks/useMonth';

export const StadisticComponent = () => {
    
    
    //console.log(MonthQuery);
    const selectMonth = useSelector((state)=>state.date.month);
    const selectYear = useSelector((state)=>state.date.year);
   
    const {MonthQuery} = useMonth();
    
    if(MonthQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(MonthQuery.isError){return (<ErrorComponent/>)}      
    if(!MonthQuery.data){return(<NoDataComponent/>)}

    //console.log(MonthQuery.data)

    const topicInfo = () =>{
        Swal.fire({
            title: ``,
            text:  ``,
            icon: 'info',
            confirmButtonText: 'ok'
          })

    }

    return(
        <>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Positivos</h3>
                    <span className="badge rounded-pill text-bg-success feel-badge">{MonthQuery.data.positive}%</span>
                    
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <p>Top de temas en {selectMonth} del {selectYear}</p>                    
                        </div>
                        <ul className="list-group list-group-flush">
                            {MonthQuery.data.top.map((topic, i) => <li className="list-group-item" key={i} onClick={topicInfo}>{topic}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Negativos</h3>
                    <span className="badge rounded-pill text-bg-danger feel-badge">{MonthQuery.data.negative}%</span>
                </div>
            </div>
            </div>
        </>
    )
}