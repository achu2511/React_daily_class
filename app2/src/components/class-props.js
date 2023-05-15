import React from "react";

class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age:""
        }
    }
    update(event){
        this.setState({

            age:event.target.value
        }
        )
        
    }


    render(){
        return(
            <div>
                <input type="text" id="age" onChange={this.update.bind(this)}/>
                <h1>My age is {this.state.age}</h1>
                {/* <button onClick={()=>this.update()}>Click</button> */}
            </div>
        )
    }
}
export default Sample;