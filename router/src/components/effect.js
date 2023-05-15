import React from "react";
import { useState,useEffect } from "react";

const DemoSta =()=>{

    const [count, setCount] = useState(0)

useEffect(() => {

    document.title="i effected"+count
    console.log("effected")
})

    const updateCount= ()=>{

        setCount(count+1)
    }
return(

    <>
      <h2>my initial count is {count}</h2>
      <button onClick={updateCount}>click me</button>
    </>
)

}
export default  DemoSta;