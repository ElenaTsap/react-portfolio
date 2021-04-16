import './Home.css'
import {NavLink} from "react-router-dom";
import CursorEffect from '../components/CursorEffect'

const Home = () => {
    return (
        <section className = 'home-container'>
            <div className = 'home-text-container'>
                <div>
                    Hello, I am <span className = 'photo-container'>Elena</span> a Full Stack developer with a multidisciplinary design background. <br/><br/> Oh! and I am based in Berlin
                </div>
                <CursorEffect>
                <NavLink 
                    exact
                    className = "nav-item nav-item-extra"
                    activeClassName = "active"
                    to = "/about"
                >
                    what I do_____
                </NavLink>
            </CursorEffect>
                
            </div>

        </section>
    )
}

export default Home
