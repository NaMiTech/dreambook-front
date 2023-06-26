import React from 'react';
import { HeaderSubTitle } from './HeaderSubTitle';
import { HeaderTitle } from './HeaderTitle'
import { CloudTags } from './CloudTags'
import { Footer } from './Footer'
import { StoreComponent } from './StoreComponent'
import { DreamNavigator } from './components/DreamNavigator';
import { DayNavigator } from './components/DayNavigator';
import { GlobalView } from './components/GlobalView';
import { GraphComponent } from './components/GraphComponent';
import { SelectorLenguaje } from './components/SelectorLenguage';
import { DropdownSelectorLenguaje } from './components/DropdownSelectorLenguaje';


export const App = () => {

return(
<>
  <DropdownSelectorLenguaje/>
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