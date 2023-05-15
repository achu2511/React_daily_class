import React from "react";
import '../App.css';
import ImageAvatars from "./avatar";
import ApexChart from "./spline";
import CustomizedTables from "./table";
import { Link } from "react-router-dom";

const Achu =()=>
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
        <div class="right">
            <div class="main">
                <div class="head">
                    <h1 class="main-head"><span class="col">G</span>ood <span class="col">M</span>orning, <span class="col">A</span>chyuth..</h1>
                    <div><button class="btn"><img src="https://drive.google.com/uc?export=view&id=1nDezfYzqOXXHYYBKzRmEch4l0TgOl5o9" class="adm-icon" alt=""/><p class="sign">Signed In</p></button></div>
                </div>
            </div>
            <h1 class="sub-head hk"><span class="col">S</span>ales.</h1>
            <div class="cards">
                <ApexChart className="ac-chart"></ApexChart>
            </div>
            <h1 class="recent hk"><p class="col">R</p>ecent <p class="col">B</p> ills.</h1>
            <div class="bill-cont">
                <div className="ac-table">
                <CustomizedTables></CustomizedTables>
                </div>
                
                <div class="card hv">
                    <img src="https://drive.google.com/uc?export=view&id=1RrrIZrsWPjCBCv1Iu-Wozo2TjDbetnS7" alt="" class="card-img "/>
                    <p class="c1-hd"><span class="col">S</span>uggestions</p>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Achu;