import React from "react";
import img from "./businessman.png";
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';


class Profile extends React.Component{
    render(){
        return(
        
                
                    <div className='vj-profile'>
                <div className='vj-body'>
                    <div className='vj-head'>
                        <h1>MY PROFILE</h1>
                    </div>
                    <div className='vj-main'>
                        <div className='vj-empty'></div>
                        <div className='vj-content'>
                            <div className='vj-headcontent'> 
                                <div className='vj-photo'>
                                    <img src={img} alt="" className="vj-img"/>
                                </div>
                                <div className='vj-subhead'>
                                    <h2 className="vj-pro">PROFILE</h2>
                                    <div className='vj-subedit'>
                                        <div className='vj-edit'>
                                            <p>Update your photo and personal details</p>
                                            <Button><EditIcon></EditIcon></Button>
                                        </div>
                                        <div className="vj-ar">
                                            <Button className="vj-aaa" variant="contained" color="primary">CANCEL</Button>
                                            <Button className="vj-bbb" variant="contained" color="primary">SAVE</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <br></br>
                            <br></br> */}
                            
                            <div className="vj-sui">
                                <div className="det">
                                <h4>Username</h4>
                                <h4 className="vj-deta">Vijay</h4>
                                </div>
                                <hr></hr>
                                <div className="det">
                                <h4>Password</h4>
                                <h4 className="vj-deta">**********</h4>
                                </div>
                                <hr></hr>
                                <div className="det">
                                <h4>City</h4>
                                <h4 className="vj-deta">Coimbatore</h4>
                                </div>
                                <hr></hr>
                                <div className="det">
                                <h4>GST NO</h4>
                                <h4 className="vj-deta">22AAAAAA00001Z5</h4>
                                </div>
                                <hr></hr>
                                <div className="det">
                                <h4>Phone Number</h4>
                                <h4 className="vj-deta">9894723453</h4>
                                </div>
                                <hr></hr>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Profile;
