import {NavLink} from "react-router-dom";
import './Navbar.css'
import { CursorContext } from "./CursorContextProvider";
import React, { useContext, useCallback } from "react";

const Navbar = () => {
    const [, setCursor] = useContext(CursorContext);  
    
    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    }); 

    return (
        <nav className = 'navbar-container'>
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/projects"

                onMouseEnter={toggleCursor}
                onMouseLeave={toggleCursor}
            >
                PROJECTS
            </NavLink>
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/about"

                onMouseEnter={toggleCursor}
                onMouseLeave={toggleCursor}
            >
                ABOUT
            </NavLink>
        </nav>
    )
}

export default Navbar