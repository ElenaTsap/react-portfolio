import './Footer.css'
import {NavLink} from "react-router-dom";
import { CursorContext } from "./CursorContextProvider";
import { useContext, useCallback } from "react";
import CursorEffect from './CursorEffect'

const Footer = () => {

    return (
        <div className = 'footer-container'>
            <div className='footer-links-container'>
                <CursorEffect>
                    <a target='blank' href = 'mailto:elenatsapaki@gmail.com'>email____</a>
                </CursorEffect>
                <CursorEffect>
                    <a target='blank' href='https://github.com/ElenaTsap/'>github____</a>
                </CursorEffect>
                <CursorEffect>
                        <a target='blank' href='https://www.behance.net/elenatsapaki'>behance____</a>
                </CursorEffect>
                <CursorEffect>
                    <a target='blank' href='https://www.linkedin.com/in/elena-tsapaki-77424a34/'>linkedin____</a>
                </CursorEffect>
            </div>


            <CursorEffect>
                <NavLink 
                    exact
                    className = "nav-item bottom-nav"
                    activeClassName = "active"
                    to = "/"
                >
                    Home
                </NavLink>
            </CursorEffect>
        </div>
    )
}

export default Footer
