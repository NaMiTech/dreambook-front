import React from 'react';

export const SeasonTable = () =>{
    const winter   = require ('../asserts/img/winter.png');
    const spring   = require ('../asserts/img/spring.png');
    const fall   = require ('../asserts/img/fall.png');
    const summer   = require ('../asserts/img/summer.png');
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