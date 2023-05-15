import {Routes,Route,BrowserRouter} from "react-router-dom";
import { ReactDOM } from "react";
import Home from './home';
import Analy from './analysis';
import Navbar from "./Nav";
export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Home/>}/>


                </Route>
            </Routes>
        </BrowserRouter>
    );
}