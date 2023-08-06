import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderSubTitle } from './HeaderSubTitle';
import { HeaderTitle } from './HeaderTitle'
import { CloudTags } from './CloudTags'
import { Footer } from './Footer'
import { StoreComponent } from './StoreComponent'
import { DreamNavigator } from './components/DreamNavigator';
import { DayNavigator } from './components/DayNavigator';
import { GraphComponent } from './components/GraphComponent';
import { DropdownSelectorLenguaje } from './components/DropdownSelectorLenguaje';
import { MoonTable } from './components/MoonTable';
import { SeasonTable } from './components/SeasonTable';
import { MonthNavigator } from './components/MonthNavigator';
import { ShowLogo } from './components/ShowLogo';


export const App = () => {
const selectMonth = useSelector((state)=>state.date.month);
const selectYear = useSelector((state)=>state.date.year);
return(
<>
  <DropdownSelectorLenguaje/>
  <ShowLogo/>
  <HeaderTitle/>
  <HeaderSubTitle/>
  <CloudTags/>
  <StoreComponent/>
  <DreamNavigator/>
  
  {
    selectYear
    ?<MonthNavigator/>
    : <div></div> 
  }

  {  
  selectMonth
    ?<DayNavigator/>
    : <div></div> 
  }
  {
    selectYear
    ?<MoonTable/>
    : <div></div> 
  }
  {
    selectYear
    ?<SeasonTable/>
    : <div></div> 
  }  
  {
    selectYear
    ?<GraphComponent/>
    : <div></div> 
  }
  <Footer/>
</>
)}