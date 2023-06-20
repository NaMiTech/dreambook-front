import React from 'react';
import { MoonTable } from "./MoonTable"
import { SeasonTable } from './SeasonTable';

export const GlobalView = () => {

    return (
        <>
        <h3>Visión Global</h3>
        <MoonTable/>
        <SeasonTable />
        </>
    )
}