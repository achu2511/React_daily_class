
import './App.css';
import react from 'react';
import {Button} from "@material-ui/core" ;
import Abc from './components/Demoprops';
// import Sample from './components/class-props';
import Multi from './components/multi';
import LoginIcon from "@material-ui/icons/AccountCircle" ;
import Sample from './components/class-props';
function App() {
  return (
    <div className='App'>
      <Abc name="Hosur"></Abc>
      <Sample></Sample>
      <Multi></Multi>
    </div>
  );
}

export default App;
