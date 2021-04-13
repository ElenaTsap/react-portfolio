import './Spinner.css'
/* import Home from '../pages/Home'
import Navbar from './Navbar'
import Footer from './Footer' */


const Spinner = () => {
    return (
        <div className = 'spinner-container'>
            <div className = 'sun-element'></div>
{/*             <div className='.sun-element'>
                <Navbar/>
                <Home/>
                <Footer/>
            </div> */}
            <div className = 'moon-element'></div>
        </div>
    )
}

export default Spinner
