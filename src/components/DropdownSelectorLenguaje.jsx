import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { setLanguage } from '../store/languageSlicer';



export const DropdownSelectorLenguaje = () => {
    const [open, setOpen] = useState(false);
    const currentLanguage = useSelector((state)=>state.language.selectedLanguage);

    const handleOpen = () => {
        console.log("cambiar a" + !open);
        setOpen(!open)
    }

    const dispatch = useDispatch();
    
    const handleSelect = (e) => {
        const optionSelect = e.target.getAttribute("data-id")
        console.log("Seleccionado: " + optionSelect);
        dispatch(setLanguage(optionSelect))
        setOpen(!open)
    }
   

    const payload = {
        "ESP":{
            "label": "ESP",
            "count": 200,
            "color" : "#FF0033"
        }, 

        "EN":{
            "label": "EN",
            "count": 200,
            "color" : "#FF0033"    
        }
    }

    const ListLenguaje = Object.values(payload);


    return(
        <div className="dropdown lenguaje-selector">
            <button type="button" 
            className="btn btn-secondary dropdown-toggle" 
            onClick={handleOpen}>
                {currentLanguage}
            </button>

            {
                open
                ? <ul className="menu">
                    {ListLenguaje.map((menuItem, index) => (
                        <li
                        key={index}
                        data-id={menuItem.label}                        
                        className="menu-item" 
                        onClick={handleSelect}>
                            {menuItem.label} ({menuItem.count})
                        </li>                 
                    ))}
                </ul>
                : null
            }
        </div>
    )
}