import React from "react";
import { Link } from "react-router-dom";
const Subscribe = () => {

    return(

        <div className="form-container">   
            <h1 className="form-text">Welcome back !</h1>
            <form>
                <label>
                    Email Address
                    <input type="mail" />
                </label>
                    <input type="submit" className="form-button" value="submit"/>
            </form>
            <div className='bottomControls'>
                <button className='btn btn-1 btn-spacing'><Link to="/">Home</Link></button>
                <button className='btn btn-2 btn-spacing'><Link to="/about">About</Link></button>
                <button className='btn btn-3 btn-spacing'><Link to="/contact">Contact</Link></button>
                <button className='btn btn-3 btn-spacing'><Link to="/subscribe">Subscribe</Link></button>
            </div>
        </div>
    );
}
export default Subscribe;