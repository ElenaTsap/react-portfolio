import {NavLink} from "react-router-dom";
import './Navbar.css'
import CursorEffect from './CursorEffect'

const Navbar = () => {
    return (
        <nav className = 'navbar-container'>
            <CursorEffect>
                <NavLink 
                    exact
                    className = "nav-item"
                    activeClassName = "active"
                    to = "/projects"
                >
                    PROJECTS
                </NavLink>
            </CursorEffect>
            <CursorEffect>
                <NavLink 
                    exact
                    className = "nav-item"
                    activeClassName = "active"
                    to = "/about"
                >
                    ABOUT
                </NavLink>
            </CursorEffect>
        </nav>
    )
}

export default Navbar