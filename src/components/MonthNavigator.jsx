import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react'
import Slider from '@mui/material/Slider';

import { setMonth } from '../store/dateSlicer';
import { useMonth } from '../hooks/useMonth';
import { StadisticComponent } from './StadisticComponent';

const month = [
    {"label": "Enero", "value" : 1},
    {"label": "Febrero", "value" : 2},
    {"label": "Marzo", "value" : 3},
    {"label": "Abril", "value" : 4},
    {"label": "Mayo", "value" : 5},
    {"label": "Junio", "value" : 6},
    {"label": "Julio", "value" : 7},
    {"label": "Agosto", "value" : 8},
    {"label": "Septiembre", "value" : 9},
    {"label": "Octubre", "value" : 10},
    {"label": "Noviembre", "value" : 11},
    {"label": "Diciembre", "value" : 12},
  
  ]

function valueLabelFormat(value) {
    return month.findIndex((month) => month.value === value) + 1;
}

function valuetext(value) {
    return `${value}°C`;
}

export const MonthNavigator = () =>{
    const dispatch = useDispatch();
    const selectYear = useSelector((state)=>state.date.year);
    const selectMonth = useSelector((state)=>state.date.month);
    const [currentMonth, setCurrenMonth] = useState(selectMonth);

    const data = useMonth()

    const OnMonthChange = (e) =>{
        console.log(e.target.value);
        //console.log(month[e.target.value - 1].label);
        //setIsSelectedMonth(true)
        setCurrenMonth(month[e.target.value - 1].label)
        dispatch(setMonth(month[e.target.value - 1].label))
    }


    return(
        <>
        <h3>Seleccione un mes</h3>

        <Slider
          aria-label="Restricted values"
          defaultValue={1}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          max={month.length}
          marks={month}
          onChange={OnMonthChange}
          />
       
        {
            currentMonth
            ? <h3 className='section-title'>En {selectMonth} del {selectYear}</h3>
            : <p className='placeholder-no-data'>Seleccione un mes para ver las estadisticas</p>
        }
        

        {
            currentMonth
            ? data 
                ? <StadisticComponent data={data}/>
                : <p>No hay datos de la fecha seleccionada</p>
            : <p className='placeholder-no-data'></p>

        }
        </>
    )
}