import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Analysis from './components/analysis';
import Navbar from './components/Nav';
import ParentComp from './components/analysis';
import Router from './components/router';


import {MultipleItem,MultipleItems} from './components/Arwin'
import Sug from './components/Suggest';
import {Route,Routes} from "react-router-dom";
import { DomPlatform } from 'chart.js';
import Achu from './components/home';
import ExportData from './components/Aakash';
import Profile from './components/vijay';
import Ac from './components/analysis';

function App() {
  return (
    <>
   <Routes>
    <Route exact path='/' element={<Achu/>}/>
    <Route  path='/Aakash' element={<ExportData/>}/>
    <Route  path='/analysis' element={<Ac/>}/>
    <Route  path='/vijay' element={<Profile/>}/>
   </Routes>
    </>
  );
}

export default App;