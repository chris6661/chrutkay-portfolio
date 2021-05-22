import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import AboutMe from './components/AboutMe'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
// import "normalize-css"; 
function App() {
  return (
    <>
    
    <Router>

    <div>
    <Navbar />
    <div className ="app-container">

    <Route exact path = '/' component = {Home} />
    <Route exact path = "/about" component = {AboutMe} />
   
    <Route exact path = "/portfolio" component = {Portfolio} />
    <Route exact path = "/contact" component = {Contact} />

    </div>

    <Footer />
     
    </div>

    </Router>
    </>
  );
}

export default App;
