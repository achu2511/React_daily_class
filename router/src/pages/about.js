import { Link } from "react-router-dom";
import LOGO from '../logo.svg';
const About = () => {
    return (
        <div>
        <div className="first hero">
            <img className="hero-profile-img" src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg" alt=""/>
                <div className="hero-description-bk her0-card-2"></div>
                <div className="hero-logo">
                    <img src={LOGO} alt=""/>
                </div>
                <div className="hero-description">
                    <p>About Page !</p>
                </div>
                <div className="hero-date">
                    <p>React Component</p>
                </div>
        </div>
            <div className='bottomControls'>
                <button className='btn btn-1 btn-spacing'><Link to="/">Home</Link></button>
                <button className='btn btn-2 btn-spacing'><Link to="/about">About</Link></button>
                <button className='btn btn-3 btn-spacing'><Link to="/contact">Contact</Link></button>
                <button className='btn btn-3 btn-spacing'><Link to="/subscribe">Subscribe</Link></button>
            </div>
        </div>
    );
}
export default About;