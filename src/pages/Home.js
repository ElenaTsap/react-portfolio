import './Home.css'
import {NavLink} from "react-router-dom";
import CursorEffect from '../components/CursorEffect'

const Home = () => {
    return (
        <section className = 'home-container'>
            <div className = 'home-text-container' data-aos="fade-up" data-aos-duration="1000">
                <div>
                    Hello, I am Elena a Full Stack developer with a multidisciplinary design background. <br/><br/> Oh! and I am based in Berlin
                </div>
                <CursorEffect>
                    <NavLink 
                        exact
                        className = "nav-item nav-item-extra"
                        activeClassName = "active"
                        to = "/about"
                    >
                        <div>my story_____</div>
                    </NavLink>
                </CursorEffect>
            </div>

        </section>
    )
}

export default Home
