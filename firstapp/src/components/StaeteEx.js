import React,{Component} from "react";

class StaeteEx extends Component{


    constructor(props){
        super(props);
        this.state={
            companyname:"dell"
        }
    }

    updateName(){

        this.setState(
            {

                companyname:"hp laptop"
            }
        )
    }

    render(){

        return(

            <div>

                <h2>my laptop name is {this.state.companyname}</h2>
                <button onClick={()=>this.updateName()}>click me</button>
            </div>
        )
    }

}

export default StaeteEx;