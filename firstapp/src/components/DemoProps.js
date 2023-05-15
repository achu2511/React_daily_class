import React from "react";


const DemoProps=(props)=>{


    return(

        <div>

     <div><b>Name:</b> <b><em>{props.name}</em></b></div>
     <div><b>Amount:</b> <b><em>{props.amount}</em></b></div>
     <div><b>SpendDate:</b> <b><em>{props.custdate.toString()}</em></b></div>
     <div><b>Category:</b> <b><em>{props.category}</em></b></div>
        </div>
    )


}

export default DemoProps;