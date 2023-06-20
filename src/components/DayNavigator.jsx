
import React from 'react';
import { useState } from 'react'
import Slider from '@mui/material/Slider';
import { DayInfo } from './DayInfo';


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
  
  ]

function valuetext(value) {
    return `${value}`;
  }
  
  function valueLabelFormat(value) {
    return value;
  }

export const DayNavigator = () => {
    const [currentDay, setCurrenDay] = useState(1);
    const handleOnChange = (e) =>{
        console.log(e.target.value);
        setCurrenDay(e.target.value)
        //console.log(month[e.target.value - 1].label);
        //setCurrenMonth(month[e.target.value - 1].label)
      }

    return(
        <>
        <div className='component'>

        <h3>Más en detalle: </h3>
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

        <DayInfo
        currentDay={currentDay}/>

        </div>
        </>
    )
}