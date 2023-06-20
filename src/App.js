import React from 'react';
import { HeaderSubTitle } from './HeaderSubTitle';
import { HeaderTitle } from './HeaderTitle'
import { CloudTags } from './CloudTags'
import { Footer } from './Footer'
import { StoreComponent } from './StoreComponent'
import { DreamNavigator } from './components/DreamNavigator';
import { StadisticComponent } from './components/StadisticComponent';
import { DayNavigator } from './components/DayNavigator';
import { GlobalView } from './components/GlobalView';


export const App = () => {

return(
<>
  <HeaderTitle/>
  <HeaderSubTitle/>
  <CloudTags/>
  <StoreComponent/>
  <div className="linea"></div>
  <DreamNavigator/>
  <StadisticComponent/>
  <DayNavigator/>
  <div className="linea"></div>
  <GlobalView/>
  <Footer/>
</>
)}