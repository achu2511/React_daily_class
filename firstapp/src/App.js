import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';
import DemoProps from './components/DemoProps';
import StaeteEx from './components/StaeteEx';

function App() {
  return (
    <div className="App">
     <h2>i am parent component</h2>
     <Demo name="App"></Demo>

     <DemoProps
     
     name="bahubali"
     amount="3400"
     custdate={new Date("2020-03-12")}
     category="hero"
     ></DemoProps>

     <StaeteEx></StaeteEx>
    </div>
  );
}

export default App;
