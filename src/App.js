import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import FooterDesktop from './components/FooterDesktop'
import FooterMobile from './components/FooterMobile'
import Cursor from './components/Cursor'
import CursorContextProvider from "./components/CursorContextProvider";
import {useState, useEffect} from 'react'
import Spinner from './components/Spinner'
import useMediaQuery from "./components/useMediaQuery";

const App = () => {

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => { 
      setSpinner(false)
      document.body.style.overflowY = "scroll";
    }, 3600);
  }, [])

  const matches = useMediaQuery("(min-width: 680px)");

  return (
    <CursorContextProvider>
      <Cursor />
      {spinner ? <Spinner/> : 
        <>
          <Navbar/>

          <Switch>
            <Route exact path = '/'>
              <Home/>
            </Route>
            <Route exact path = '/projects'>
              <Projects/>
            </Route>
            <Route exact path = '/about'>
              <About/>
            </Route>
          </Switch>

          {matches ? <FooterDesktop/> : <FooterMobile/>}
        </>}
    </CursorContextProvider> 
); 
}

export default App;
