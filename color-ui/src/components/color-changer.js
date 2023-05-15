import React from "react";

const colorOrange=()=>{
    let d=document.getElementById('output-box');
    let c=document.getElementById('btn');
    d.style.backgroundColor="Orange";
    c.style.backgroundColor="Orange";
}

const colorBlue=()=>{
    let d=document.getElementById('output-box');
    let c=document.getElementById('btn');
    d.style.backgroundColor="blue";
    c.style.backgroundColor="blue";
}

const colorRed=()=>{
    let d=document.getElementById('output-box');
    d.style.backgroundColor="red";
    let c=document.getElementById('btn');
    c.style.backgroundColor="red";
}

const colorGreen=()=>{
    let d=document.getElementById('output-box');
    let c=document.getElementById('btn');
    d.style.backgroundColor="green";
    c.style.backgroundColor="green";
}




 function ColorChanger()
{
    return(
        <>
            <h1>Color Changer</h1>
            <div className="dropdown" onClick={toggling}>
                <button className="drp-btn" id="btn">Options <img src="https://cdn-icons-png.flaticon.com/512/2609/2609201.png" alt="none"></img></button>
                <div className="dropdown-content">
                    <p onClick={colorRed}>Red</p>
                    <p onClick={colorOrange}>Orange</p>
                    <p onClick={colorBlue}>Blue</p>
                    <p onClick={colorGreen}>Green</p>
                </div>
            </div>
            <div id="output-box" className="Out" >

            </div>
        </>
    );
}

export default ColorChanger;



