import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

import { useSeasons } from '../hooks/useSeasons';
import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';

export const SeasonTable = () =>{
    const winter   = require ('../asserts/img/winter.png');
    const spring   = require ('../asserts/img/spring.png');
    const fall   = require ('../asserts/img/fall.png');
    const summer   = require ('../asserts/img/summer.png');

    const currentYear = useSelector((state)=>state.date.year);
    const {SeasonQuery} = useSeasons(currentYear);
    
    useEffect(()=>{
    
      console.log("Informacion estacional del año : " + currentYear)
    
    },[currentYear])

    // if(SeasonQuery.isLoading){return (<div>A moment please...</div>);}

    // console.log(SeasonQuery.data)

    // if(!SeasonQuery.data){
    //   return(
    //     <>
    //       <div className="errorCloud">
    //         <h3 className="btn-shine">Error</h3>
    //         <p>No se han podido cargar los tags</p>
    //       </div>    
    //     </>
    //   )
      
    // }

    if(SeasonQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(SeasonQuery.isError){return (<ErrorComponent/>)}      
    if(!SeasonQuery.data){return(<NoDataComponent/>)}

    return(<>
        <h3>Datos estacionales</h3>
        <table className="dream-table">
  <thead>
    <tr>
      <th scope="col">·</th>
      <th scope="col"><img alt="first quarter" src={String(spring)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(summer)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(fall)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(winter)} className='table-image'/></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Positivos</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
    </tr>
    <tr>
      <th scope="row">Neutros</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
    </tr>
    <tr>
      <th scope="row">Negativos</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
    </tr>
    <tr className='total-row'>
      <th scope="row">Totales</th>
      <td>25</td>
      <td>30</td>
      <td>40</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
    </>
    )
}