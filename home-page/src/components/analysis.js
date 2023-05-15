import React from "react";
import '../App.css';
import ImageAvatars from "./avatar";
import ApexChart from "./spline";
import CustomizedTables from "./table";
import Navbar from "./Nav";
import Line from './line';
import ApexChartMon from "./Monthly";
import ApexChartyr from "./yearly";
import { Link } from "react-router-dom";

const Ac =()=>
{
    return(
        <>
<div class="ac-container">
        <div class="ac-left-nav-bar">
                  <div class="ac-logo-name">
                      <img src="https://drive.google.com/uc?export=view&id=17gW9ecPUL4BtkhbWZzitgDdKCCHGJrh5" alt="" class="ac-logo"/>
                      <p class="ac-logo-txt">MAGENTA .</p>
                  </div>
                  <div className="ac-user">
                      <ImageAvatars className="ac-avatar"></ImageAvatars>
                      <p class="ac-name">Achyuth</p>
                  </div>
                  <div class="ac-export hul">
                      <img src="https://drive.google.com/uc?export=view&id=10804li_v_QRuPdPO2ap7R-eK7u4J1H8O" alt="" class="ac-dash-logo"/>
                      <button class="ac-dash-txt"><Link to="/">Dashboard</Link></button>
                  </div>
                  <div class="ac-export">
                      <img src="https://drive.google.com/uc?export=view&id=1KqmhB1FPPdUUOz2P5wh-yb-ISEZP8WpP" alt="" class="ac-dash-logo"/>
                      <button class="ac-dash-txt"><Link to="/Aakash">Export Data</Link></button>
                  </div>
                  <div class="ac-export">
                      <img src="https://drive.google.com/uc?export=view&id=1xeaQs-mSC49J9YNzUHlLt0e74GyuKQAi" alt="" class="ac-dash-logo"/>
                      <button class="ac-dash-txt"><Link to="/analysis">Analysis</Link></button>
                  </div>
                  <div class="ac-export ac">
                      <img src="https://drive.google.com/uc?export=view&id=1MpOayYNg8J-KCaWXzEYKaQQncJ9Z7WCf" alt="" class="ac-dash-logo"/>
                      <button class="ac-dash-txt"><Link to="/vijay">Profile</Link></button>
                  </div>  
        </div>
                <div className="as-bak">
                    <div className="as-head">
                        <p>Analysis of products</p>
                    </div>
                    <div className="as-right">
                        <button className="as-click" >Today</button>
                    </div>
                    <div>
                        <ApexChart></ApexChart>
                    </div>
                    <div className="as-right">
                        <button className="as-click" >Monthly</button>
                    </div>
                    <div>
                        <ApexChartMon></ApexChartMon>
                    </div>
                    <div className="as-right">
                        <button className="as-click" >Yearly</button>
                    </div>
                    <div>
                        <ApexChartyr></ApexChartyr>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Ac;