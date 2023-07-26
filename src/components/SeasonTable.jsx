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


    if(SeasonQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(SeasonQuery.isError){return (<ErrorComponent/>)}      
    if(!SeasonQuery.data){return(<NoDataComponent/>)}

    //console.log(SeasonQuery.data)

    return(<>
        <h3>Datos estacionales</h3>
        <table className="dream-table">
  <thead>
    <tr>
      <th scope="col">·</th>
      <th scope="col"><img alt="first quarter" src={String(spring)} className='table-image' title="Primavera"/></th>
      <th scope="col"><img alt="first quarter" src={String(summer)} className='table-image' title="Verano"/></th>
      <th scope="col"><img alt="first quarter" src={String(fall)}   className='table-image' title="Otoño"/></th>
      <th scope="col"><img alt="first quarter" src={String(winter)} className='table-image' title="Invierno"/></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Positivos</th>
      <td>{SeasonQuery.data.sprint["positive"]} %</td>
      <td>{SeasonQuery.data.summer["positive"]} %</td>
      <td>{SeasonQuery.data.fall["positive"]} %</td>
      <td>{SeasonQuery.data.winter["positive"]} %</td>
    </tr>
    <tr>
      <th scope="row">Neutros</th>
      <td>{SeasonQuery.data.sprint["neutral"]} %</td>
      <td>{SeasonQuery.data.summer["neutral"]} %</td>
      <td>{SeasonQuery.data.fall["neutral"]} %</td>
      <td>{SeasonQuery.data.winter["neutral"]} %</td>
    </tr>
    <tr>
      <th scope="row">Negativos</th>
      <td>{SeasonQuery.data.sprint["negative"]} %</td>
      <td>{SeasonQuery.data.summer["negative"]} %</td>
      <td>{SeasonQuery.data.fall["negative"]} %</td>
      <td>{SeasonQuery.data.winter["negative"]} %</td>
    </tr>
    <tr className='total-row'>
      <th scope="row">Totales</th>
      <td>{SeasonQuery.data.sprint["total"]}</td>
      <td>{SeasonQuery.data.summer["total"]}</td>
      <td>{SeasonQuery.data.fall["total"]}</td>
      <td>{SeasonQuery.data.winter["total"]}</td>
    </tr>
  </tbody>
</table>
    </>
    )
}