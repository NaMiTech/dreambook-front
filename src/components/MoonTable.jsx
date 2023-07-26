import React from 'react';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

import { useMoonStadistic } from '../hooks/useMoonStadistic';
import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';

const new_moon   = require ('../asserts/img/new_moon.png');
const first_quarter   = require ('../asserts/img/first_quarter.png');
const full            = require ('../asserts/img/full_moon.png');
const last_quarter    = require ('../asserts/img/last_quarter.png');
const waning_crescent = require ('../asserts/img/waning_crescent.png');
const waning_gibbous  = require ('../asserts/img/waning_gibbous.png');
const waxing_crescent = require ('../asserts/img/waxing_crescent.png');
const waxing_gibbous  = require ('../asserts/img/waxing_gibbous.png');


export const MoonTable = () =>{

  const currentYear = useSelector((state)=>state.date.year);  
  const {MoonStadisticQuery} = useMoonStadistic(currentYear);

  useEffect(()=>{
    
    console.log("Informacion lunar del año : " + currentYear)
  
  },[currentYear])

  if(MoonStadisticQuery.isLoading){return (<div class="custom-loader"></div>);}    
  if(MoonStadisticQuery.isError){return (<ErrorComponent/>)}      
  if(!MoonStadisticQuery.data){return(<NoDataComponent/>)}

return(
    <>

<table className="dream-table">
  <thead>
    <tr>
      <th scope="col">·</th>
      <th scope="col"><img alt="first quarter" src={String(new_moon)}         className='table-image' title="Luna Nueva"/></th>
      <th scope="col"><img alt="first quarter" src={String(waxing_crescent)}  className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(first_quarter)}    className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(waxing_gibbous)}   className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(full)}             className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(waning_gibbous)}   className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(last_quarter)}     className='table-image' title="Luna "/></th>
      <th scope="col"><img alt="first quarter" src={String(waning_crescent)}  className='table-image' title="Luna "/></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Positivos</th>
      <td>{MoonStadisticQuery.data.new_moon["positive"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_crescent["positive"]} %</td>
      <td>{MoonStadisticQuery.data.first_quarter["positive"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_gibbous["positive"]} %</td>
      <td>{MoonStadisticQuery.data.full_moon["positive"]} %</td>
      <td>{MoonStadisticQuery.data.waning_gibbous["positive"]} %</td>
      <td>{MoonStadisticQuery.data.last_quarter["positive"]} %</td>
      <td>{MoonStadisticQuery.data.waning_crescent["positive"]} %</td>
    </tr>
    <tr>
      <th scope="row">Neutros</th>
      <td>{MoonStadisticQuery.data.new_moon["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_crescent["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.first_quarter["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_gibbous["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.full_moon["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.waning_gibbous["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.last_quarter["neutral"]} %</td>
      <td>{MoonStadisticQuery.data.waning_crescent["neutral"]} %</td>
    </tr>
    <tr>
      <th scope="row">Negativos</th>
      <td>{MoonStadisticQuery.data.new_moon["negative"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_crescent["negative"]} %</td>
      <td>{MoonStadisticQuery.data.first_quarter["negative"]} %</td>
      <td>{MoonStadisticQuery.data.waxing_gibbous["negative"]} %</td>
      <td>{MoonStadisticQuery.data.full_moon["negative"]} %</td>
      <td>{MoonStadisticQuery.data.waning_gibbous["negative"]} %</td>
      <td>{MoonStadisticQuery.data.last_quarter["negative"]} %</td>
      <td>{MoonStadisticQuery.data.waning_crescent["negative"]} %</td>
    </tr>
    <tr className='total-row'>
      <th scope="row">Totales</th>
      <td>{MoonStadisticQuery.data.new_moon["total"]} </td>
      <td>{MoonStadisticQuery.data.waxing_crescent["total"]}</td>
      <td>{MoonStadisticQuery.data.first_quarter["total"]} </td>
      <td>{MoonStadisticQuery.data.waxing_gibbous["total"]} </td>
      <td>{MoonStadisticQuery.data.full_moon["total"]} </td>
      <td>{MoonStadisticQuery.data.waning_gibbous["total"]} </td>
      <td>{MoonStadisticQuery.data.last_quarter["total"]} </td>
      <td>{MoonStadisticQuery.data.waning_crescent["total"]} </td>
    </tr>
  </tbody>
</table>
</>
)

} 