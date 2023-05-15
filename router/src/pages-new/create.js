import React,{useState} from "react";
import axios from "axios";
import {API_URL} from "../API";

 const Create =()=>
{
    const[fullname,setfullname]=useState('');
    const[email,setemail]=useState('');

    const handleSubmit = async()=>
    {
        await axios.post(API_URL,{
            fullname,email
        })
    }

    const handleReset=(event)=>
    {
        window.location.reload();
    }


    return(
        <>
            <input label="fullname" onChange={event=>setfullname(event.target.value)} placeholder="fullname"/>
            <br/>
            <br/>
            <input label="email" onChange={event=>setemail(event.target.value)} placeholder="email"/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}


export default Create;