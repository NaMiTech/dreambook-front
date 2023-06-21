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
import { GraphComponent } from './components/GraphComponent';


export const App = () => {

return(
<>
  <HeaderTitle/>
  <HeaderSubTitle/>
  <CloudTags/>
  <StoreComponent/>
  <div className="linea"></div>
  <DreamNavigator/>

  <DayNavigator/>
  <div className="linea"></div>
  <GlobalView/>
  <GraphComponent/>
  <Footer/>
</>
)}