import React from "react";

function Demo(props){

return(
    <>
    <h2>i am child {props.name}</h2>
    <Child></Child>
    <SubChild></SubChild>
    <SuperChild></SuperChild>

    
    </>
)


}
export default Demo;

const Child=()=>{
    return <h2>i am child of demo</h2>
}

const SubChild=()=>{

    return <h3>i am subchild</h3>
}

const SuperChild =()=>{

    return <h4>i am super chilkd</h4>
}