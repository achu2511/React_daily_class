import React, { Component } from 'react';
import Navbar from './Nav';
import Multiple from './slider';
// import {MultipleItem,MultipleItems} from './Arwin'


function Sug()
{
    return(
        <div>
            <div className='flex'>
            <Navbar></Navbar>
            <div className='Height-ar'>
                <Multiple></Multiple>
            </div>
            </div>
        </div>
    );
}

export default Sug;