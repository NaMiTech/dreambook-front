import React from 'react';
import { useSelector } from 'react-redux';

import { MoonTable } from "./MoonTable"
import { SeasonTable } from './SeasonTable';

export const GlobalView = () => {
    const year = useSelector((state)=>state.date.year);
    return (
        <>
        <h3>El año {year}</h3>
        <MoonTable/>
        <SeasonTable />
        </>
    )
}