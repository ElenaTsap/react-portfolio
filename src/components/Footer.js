import './Footer.css'
import {NavLink} from "react-router-dom";
import wave from '../assets/wave.svg'

const Footer = () => {
    return (
        <div className = 'footer-container'>
            <div className='footer-links-container'>
                <div><a >email____</a></div>
                <div><a href='https://github.com/ElenaTsap/'>github____</a></div>
                <div><a href='https://www.behance.net/elenatsapaki'>behance____</a></div>
                <div><a href='https://www.linkedin.com/in/elena-tsapaki-77424a34/'>linkedin____</a></div>
                {/* <img src={wave}></img> */}
               {/*  <div className='wave'>wave</div> */}
            </div>


            
            <NavLink 
                exact
                className = "nav-item"
                activeClassName = "active"
                to = "/"
            >
                Home
            </NavLink>
        </div>
    )
}

export default Footer
