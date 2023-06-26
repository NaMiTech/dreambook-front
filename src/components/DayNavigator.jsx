
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { DayInfo } from './DayInfo';
import { setDay } from '../store/dateSlicer';
import { useDay } from '../hooks/useDay';


const available_days = [
    {"label": "1", "value" : 1},
    {"label": "2", "value" : 2},
    {"label": "3", "value" : 3},
    {"label": "4", "value" : 4},
    {"label": "5", "value" : 5},
    {"label": "6", "value" : 6},
    {"label": "7", "value" : 7},
    {"label": "8", "value" : 8},
    {"label": "9", "value" : 9},
    {"label": "10", "value" : 10},
    {"label": "11", "value" : 11},
    {"label": "12", "value" : 12},
    {"label": "13", "value" : 13},
    {"label": "14", "value" : 14},
    {"label": "15", "value" : 15},
    {"label": "16", "value" : 16},
    {"label": "17", "value" : 17},
    {"label": "18", "value" : 18},
    {"label": "19", "value" : 19},
    {"label": "20", "value" : 20},
    {"label": "21", "value" : 21},
    {"label": "22", "value" : 22},
    {"label": "23", "value" : 23},
    {"label": "24", "value" : 24},
    {"label": "25", "value" : 25},
    {"label": "26", "value" : 26},
    {"label": "27", "value" : 27},
    {"label": "28", "value" : 28},
    {"label": "29", "value" : 29},
    {"label": "30", "value" : 30},
  
  ]

function valuetext(value) {
    return `${value}`;
  }
  
  function valueLabelFormat(value) {
    return value;
  }

export const DayNavigator = () => {

  const infoCurrentDay = useDay()
    
  const [currentDay, setCurrenDay] = useState(1);
    const dispatch = useDispatch();

    const handleOnChange = (e) =>{
        console.log(e.target.value);
        setCurrenDay(e.target.value)
        dispatch(setDay(e.target.value))
      }

      useEffect(()=>{
    
        console.log("Dia seleccionado : " + currentDay)
        console.log(infoCurrentDay)
      
      },[currentDay])
    
    const day   = useSelector((state)=>state.date.day);
    const month = useSelector((state)=>state.date.month);
    const year  = useSelector((state)=>state.date.year);

    return(
        <>
        <div className='component'>
        {
          day
          ?<h3>El día : {day}/{month}/{year}</h3>          
          :<h3>Seleccione un día</h3>
        }
        <Slider
              aria-label="Restricted values"
              defaultValue={1}
              step={null}
              max={available_days.length}
              marks={available_days}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              onChange={handleOnChange}
              />

        {
        infoCurrentDay
            ? <DayInfo
            currentDay={currentDay}/>
            : <p>Seleccione una fecha</p>
        }

        

        </div>
        </>
    )
}