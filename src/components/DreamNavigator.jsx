import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { setYear } from '../store/dateSlicer';

const year = [
  {"label": "2022", "value" : 1},
  {"label": "2023", "value" : 2},
  {"label": "2024", "value" : 3},
]

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return year.findIndex((year) => year.value === value) + 1;
}


export const DreamNavigator = () => {
  
  const dispatch = useDispatch();
  //const [isYearSelected, setIsYearSelected] = useState(false);
  const selectYear = useSelector((state)=>state.date.year);  
  //const [currentYear, setCurrenYear] = useState(selectYear);
  
  useEffect(()=>{
    
      console.log("Año seleccionado : " + selectYear)
    
    },[selectYear])

      const selectedYear = (e) =>{
        //setIsYearSelected(true);
        //setCurrenYear(year[e.target.value - 1].label)

        dispatch(setYear(year[e.target.value - 1].label))
      }

    return(
        <>  
        <div className='component'>

            <h2>Y con esto se soñaba... </h2>
            
            <h3>Seleccione un año</h3>
            
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

        </div>
        </>
    )
}