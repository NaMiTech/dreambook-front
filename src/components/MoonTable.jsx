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

  // if(MoonStadisticQuery.isLoading){return (<div>A moment please...</div>);}

  // console.log(MoonStadisticQuery.data)

  // if(!MoonStadisticQuery.data){
  //   return(
  //     <>
  //       <div className="errorCloud">
  //         <h3 className="btn-shine">Error</h3>
  //         <p>No se han podido cargar los tags</p>
  //       </div>    
  //     </>
  //   )
    
  // }


  if(MoonStadisticQuery.isLoading){return (<div class="custom-loader"></div>);}    
  if(MoonStadisticQuery.isError){return (<ErrorComponent/>)}      
  if(!MoonStadisticQuery.data){return(<NoDataComponent/>)}

return(
    <>

<table className="dream-table">
  <thead>
    <tr>
      <th scope="col">·</th>
      <th scope="col"><img alt="first quarter" src={String(new_moon)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(waxing_crescent)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(first_quarter)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(waxing_gibbous)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(full)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(waning_gibbous)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(last_quarter)} className='table-image'/></th>
      <th scope="col"><img alt="first quarter" src={String(waning_crescent)} className='table-image'/></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Positivos</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
      <td>23%</td>
      <td>70%</td>
      <td>12%</td>
      <td>90%</td>
    </tr>
    <tr>
      <th scope="row">Neutros</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
      <td>23%</td>
      <td>70%</td>
      <td>12%</td>
      <td>90%</td>
    </tr>
    <tr>
      <th scope="row">Negativos</th>
      <td>25%</td>
      <td>30%</td>
      <td>40%</td>
      <td>15%</td>
      <td>23%</td>
      <td>70%</td>
      <td>12%</td>
      <td>90%</td>
    </tr>
    <tr className='total-row'>
      <th scope="row">Totales</th>
      <td>25</td>
      <td>30</td>
      <td>40</td>
      <td>15</td>
      <td>23</td>
      <td>70</td>
      <td>12</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
</>
)

} 