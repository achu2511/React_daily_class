// import logo from './logo.svg';
import './App.css';
import Demo from './components/demo-hooks';
import DemoSta from './components/effect';
// import Nav from './components/nav';
// import {Route,Routes} from "react-router-dom";
// import Home from './pages/home';
// import Contact from './pages/contact';
// import Home from './pages/home';
// import About from './pages/about';
import Forms from './components/form';
// import Subscribe from './pages/subscribe';

function App() {
  return (
    <div className='App'>
      {/* <Nav/> */}
      {/* <Routes> */}
        {/* <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/subscribe' element={<Subscribe/>}/> */}

        {/* <Forms/> */}
        <Demo>
          </Demo>

        <DemoSta/> 
      {/* </Routes> */}
    </div>
    
  );
}

export default App;
