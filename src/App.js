import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import CursorContextProvider from "./components/CursorContextProvider";
import {useState, useEffect} from 'react'
import Spinner from './components/Spinner'
import Grid from './components/Grid';

const App = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => { 
      setSpinner(false)
      document.body.style.overflowY = "scroll";
}, 5600);
  }, [])

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
              {/* <About/> */}
              <Grid/>
            </Route>
          </Switch>

          <Footer/>
        </>}
    </CursorContextProvider> 
); 
}

export default App;


/* return (
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

              <Footer/>
            </>}
        </CursorContextProvider> 
  ); */

  /*  
  import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import CursorContextProvider from "./components/CursorContextProvider";
import {useState, useEffect} from 'react'
import Spinner from './components/Spinner'

const App = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => { 
      setSpinner(false)
}, 6000);
  }, [])

  return (
        <CursorContextProvider>
          <Cursor />
            
            <div className='main-main'>
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

              <Footer/>
            </div>
            {spinner ? <Spinner className = 'spinner-main'/> : ''}  
        </CursorContextProvider> 
  );
}

export default App;*/

/* 
return (
        <CursorContextProvider>
          <Cursor />
            
            <div className='main-main'>
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

              <Footer/>
            </div>
            {spinner ? <Spinner className = 'spinner-main'/> : ''}  
        </CursorContextProvider> 
  );
*/