import {NavLink} from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Login">Log In</NavLink></li>
                <li><NavLink to="/Signup">Sign Up</NavLink></li>
            </ul>
        </nav>
      );

    }

export default NavBar;
