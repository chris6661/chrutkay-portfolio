import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Particles from 'react-particles-js'; 
import Navbar from './components/Navbar';
// import Header from './components/Header'; 
import Home from './components/Home'; 
import AboutMe from './components/AboutMe'; 
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <>
    {/* little floaty things */}
    {/* <Particles
    className='particles-canvas'
    params= {{
      particles: {
        number: {
          value: 30, 
          density: {
            enable: true, 
            value_area: 900
          }
        },
        shape: {
          type:'circle', 
          stroke: {
            width: 6,
            color: '#009900'
          }
        }
      }
    }} /> */}
    <Router>
    <div className = "App">
    <Navbar />
    {/* <Switch> */}
    {/* <Header />  */}
    <Route exact path = '/' component = {Home} />
    <Route exact path = "/about" component = {AboutMe} />
    <Route exact path = "/skills" component = {Skills} />
    <Route exact path = "/experience" component = {Experience} />
    <Route exact path = "/portfolio" component = {Portfolio} />
    <Route exact path = "/contact" component = {Contact} />
    {/* </Switch> */}
    <Footer />
    </div>
    </Router>
    </>
  );
}

export default App;
