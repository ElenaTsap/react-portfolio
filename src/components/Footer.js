import './Footer.css'
import {NavLink} from "react-router-dom";
import CursorEffect from './CursorEffect'
import useMediaQuery from './useMediaQuery';

const Footer = () => {

    const matches = useMediaQuery("(min-width: 680px)");

    const styles = {
        desktop: {
            footerContainer: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'fixed',
                bottom: '0px',
                backgroundColor: '#FEFEF3',
                fontFamily: `'Nanum Myeongjo', serif`,
                fontWeight: '700',
                height: '85px',
                zIndex: '10'
            }

        },
        mobile : {
            footerContainer: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'fixed',
                bottom: '0px',
                backgroundColor: 'red',
                fontFamily: `'Nanum Myeongjo', serif`,
                fontWeight: '700',
                height: '85px',
                zIndex: '10'
            }

        }
    }

    return (
        <div style = {styles.desktop.footerContainer}>
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
