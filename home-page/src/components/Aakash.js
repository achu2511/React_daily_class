// import React from "react";

import React from "react";
import '../App.css';
import ImageAvatars from "./avatar";
import Navbar from "./Nav";
import {Link} from 'react-router-dom';

class ExportData extends React.Component{
    render(){
        return(
            <>
            <div className="ak-flex">
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
            <div>
            <div className="ak-nav" align="center">
                <h1>Export Your Data</h1>
            </div>
            <div className="box1" >
                <img src="https://drive.google.com/uc?export=view&id=1VOIhaHXqkjRef37GYMGDrlrQa4x7MbXf" alt="" className="img1"/>
                <form action="/action_page.php">
                <input type="file" id="actual-btn" hidden/>
                    <label for="actual-btn"> Upload</label>
                    <p> Upload your Excel file.</p>
                    <input type="submit" value="Submit" className="submit" />
                </form>
         </div>
        <div className="box2" >
            <img src="https://drive.google.com/uc?export=view&id=12EAGOjO6n0zliBT43EmkKBQ1oyPFSXyG" alt="" className="img2"/>
            <form action="/action_page.php">
                <input type="file" id="actual-btn" hidden/>
                <label for="actual-btn">Upload</label>
                <p>Upload your Photograph.</p>
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
        <div className="box3" >
            <img src="https://drive.google.com/uc?export=view&id=1Z4lTDOOCcwklC9allz8Q3ahn4nsWUyeh" alt="" className="img3"/>
            <form action="/action_page.php">
                <input type="file" id="actual-btn" hidden/>
                <label for="actual-btn">Upload</label>
                <p>Upload via Audio. </p>
                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
        </div>
        </div>
        </>
        )
    }
}
export default ExportData;