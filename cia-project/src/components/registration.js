import React from "react";
import '../App.css';

export class Registeration extends React.Component
{
    constructor()
    {
        super();
        this.state={
            fields:{},
            errors:{}
        }

        this.handlechange=this.handlechange.bind(this);
        this.submituserregistrationform=this.submituserregistrationform.bind(this);
    };

    handlechange(e)
    {
        let fields=this.state.fields;
        fields[e.target.name]=e.target.value;
        this.setState({
            fields
        });
    }

    submituserregistrationform(e)
    {
        console.log(this.Validateform());
        e.preventDefault();
        if(this.Validateform())
        {
            console.log(this.state);
            let fields={};
            fields["username"]="";
            fields["emailid"]="";
            fields["password"]="";
            this.setState({fields:fields});
            console.log(this.state);
            alert("!! Registration form submitted successfully !!");

        }



    }

    Validateform()
    {
        let fields=this.state.fields;
        let errors={};
        let ct=0;
        let formValidation=true;

        if (!fields["username"]) {
            formValidation = false;
            errors["username"] = "--* Please enter your Name--";
          }
      
          if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
              formValidation = false;
              errors["username"] = "--*Please enter alphabet characters only--";
            }
        }

        if (!fields["emailid"]) {
            formValidation = false;
            errors["emailid"] = "--*Please enter your email-ID--";
          }
      
          if (typeof fields["emailid"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
              formValidation = false;
              errors["emailid"] = "--*Please enter valid email-ID--";
            }
          }

          if (!fields["password"]) {
            formValidation = false;
            errors["password"] = "--*Please enter your password--";
          }
      
          if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formValidation = false;
              errors["password"] = "--*Please enter secure and strong password--";
            }

            if (!fields["password"].match(/^.(?=.{8,})/)){
                    formValidation = false;
                    errors["password"]="*Password is weak.";
                }
            else if (!fields["password"].match("/^.(?=.\d)/")){
                    formValidation = false;
                    errors["password"]="*Password is weak include small,caps and special characters.";
                }
            else if (!fields["password"].match("/^.(?=.[a-z])")){
                    formValidation = false;
                    errors["password"]="*Password is weak include caps and special characters.";
                }
            }
          

          this.setState({
            errors: errors
          });
          return formValidation;

    }

    render()
    {
        return(
            <div id="main-registration-container" className="container">
                <div id="register" >
                    <h3>User Registration</h3>
                    <form method={"POST"}  name="userRegistrationForm"  onSubmit= {this.submituserregistrationform} >
                        <label>Name</label>
                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.username}</div>
                        <label>Email ID:</label>
                            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handlechange}  />
                        <div className="errorMsg">{this.state.errors.emailid}</div>
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.fields.password} onChange={this.handlechange} />
                        <div className="errorMsg">{this.state.errors.password}</div>
                        <input type="submit" value="Register" className="btn"/>
                    </form>
                </div>
            </div>

        );
    }

}