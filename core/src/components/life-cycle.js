import React from "react";

class Test extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={Hello:"Aids"};
    }

    changeState()
    {
        this.setState=({Hello:"Achu"});
    }

    render
    (){
        return(
            <>
                <h1>SKCET, Hello { this.state.Hello }</h1>
                <a onClick={this.changeState.bind(this)}>Press Here!</a>
            </>
        )
    
    }
}

export default Test;