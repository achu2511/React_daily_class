import React from "react";

class Forms extends React.Component{
    constructor(props) {  //initial create
        super(props);  
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();  
    }  
    updateSubmit(event) {  
        alert('You have entered the Username and Company name successfully.');  
        event.preventDefault();  
    }  
    render() {  
      return (  
        <form onSubmit={this.updateSubmit}>  
          <h1>React Forms - CSE / AIDS</h1>  
          <label>Name:  
              <input type="text" ref={this.input} />  
          </label> <br/>
          <label>  
              Age:  
              <input type="text" ref={this.input} />  
          </label>  <br/>
          <label>  
              Address:  
              <input type="text" ref={this.input} />  
          </label>  <br/>
          <label>  
              Phone number:  
              <input type="text" ref={this.input} />  
          </label>  <br/>
          <label>  
              E-Mail Id:  
              <input type="email" ref={this.input} />  
          </label>  <br/>
          <label>  
              CompanyName:  
              <input type="text" ref={this.input} />  
          </label>  <br/>
          <input type="submit" value="Submit" />  
        </form>  
      );  
    } 
}
export default Forms;