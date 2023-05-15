import React from "react";

export const Hover=()=>
{
    return(
        <>
            <div className="ac-nav">
                <h1>SKCET</h1>
                <h2>Home</h2>
                <div className="dropdown">
                    <button className="drop-btn">Drop</button>
                    <div className="dropdown-cont">
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                </div>
                <h2>Settings</h2>

            </div>
        </>
    );
}