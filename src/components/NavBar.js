import {NavLink} from 'react-router-dom';
import "../App.css";

const NavBar = () => {
    
    return (
        <section className='container'>
            <div className='wrapper'>
                <ul>
                    <li className='item'><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Login">Log In</NavLink></li>
                    <li><NavLink to="/Signup">Sign Up</NavLink></li>
                </ul>
            </div>
        </section>
      );

    }

export default NavBar;
