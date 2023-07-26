import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { StadisticComponent } from './StadisticComponent';
import { setMonth, setYear } from '../store/dateSlicer';
import { useMonth } from '../hooks/useMonth';

const year = [
  {"label": "2022", "value" : 1},
  {"label": "2023", "value" : 2},
  {"label": "2024", "value" : 3},
]

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

//const data = null


function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return month.findIndex((month) => month.value === value) + 1;
}


export const DreamNavigator = () => {
  
  const dispatch = useDispatch();
  const [currentMonth, setCurrenMonth] = useState("Enero");
  const [currentYear, setCurrenYear] = useState("2023");
  const selectYear = useSelector((state)=>state.date.year);
  const selectMonth = useSelector((state)=>state.date.month);

  const data = useMonth()
  
    useEffect(()=>{
    
      console.log("Año seleccionado : " + selectYear)
    
    },[selectYear])
    
    const handleOnChange = (e) =>{
        console.log(e.target.value);
        //console.log(month[e.target.value - 1].label);
        setCurrenMonth(month[e.target.value - 1].label)
        dispatch(setMonth(month[e.target.value - 1].label))
      }

      const selectedYear = (e) =>{
        //console.log(e.target.value);
        //console.log(month[e.target.value - 1].label);
        setCurrenYear(year[e.target.value - 1].label)

        dispatch(setYear(year[e.target.value - 1].label))
      }

    return(
        <>  
        <div className='component'>

            <h2>Y con esto se soñaba... </h2>

            <Slider
              aria-label="Restricted values"
              defaultValue={1}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              max={year.length}
              marks={year}
              onChange={selectedYear}
              />
          
            <Slider
              aria-label="Restricted values"
              defaultValue={1}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              max={month.length}
              marks={month}
              onChange={handleOnChange}
              />
          

          <h3>En {currentMonth} del {currentYear}</h3>
        </div>

      {
          selectMonth
            ? <StadisticComponent
            data={data}/>
            : <p>Seleccione un mes para ver las estadisticas</p>

        }

        </>
    )
}