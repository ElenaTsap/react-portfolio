import {NavLink} from "react-router-dom";
import {useState} from 'react'
import './FooterMobile.css'
import { FaTimes } from 'react-icons/fa';

const Footer = () => {
    const [open, setOpen] = useState(true)

    const openMenuHandler = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const openedMenu = () => {
        return (
            <div className='opened-menu-container bottom-nav'>
                <div>
                    <a target='blank' href = 'mailto:elenatsapaki@gmail.com'>email____</a>
                    <a target='blank' href='https://github.com/ElenaTsap/'>github____</a>
                    <a target='blank' href='https://www.behance.net/elenatsapaki'>behance____</a>
                    <a target='blank' href='https://www.linkedin.com/in/elena-tsapaki-77424a34/'>linkedin____</a>
                </div>

                <div>
                    <div onClick = {openMenuHandler}><FaTimes/></div>
                    <NavLink 
                        exact
                        activeClassName = "active"
                        className = "bottom-nav"
                        to = "/"
                        onClick = {openMenuHandler}
                    >
                        Home
                    </NavLink>

                </div>

            </div>

        )
    }

    const closedMenu = () => {
        return (
            <div className='closed-menu-container' onClick = {openMenuHandler}>
                open
            </div> )
    }

    return (
        <div className = 'mobile-menu-container'>
            {open ? closedMenu() : openedMenu()}
        </div>
            
    )
}

export default Footer
