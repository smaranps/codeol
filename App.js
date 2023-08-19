import React from 'react'
import './App.css'
import {
BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// Different Components
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Hotel from './Hotels.js';
import Contact from './Contact.js';
import Sponsor from './Sponsors.js';
import Location from './location.js';


function App(){
  return(
    <div id='mainmenu'>
      <Router>
      <div className="bar">
        
        <ul>
        
          <li className='marg'> <Link to="/"  ><img src='https://www.lavillaroyale.lt/wp-content/uploads/2017/12/151433509593583.png' id='logo' alt='Royal Inn'/></Link></li>
       
        <li className='marg' id='iop'><Link to="/Abtcomp" className="NavDiv">About Us</Link></li>
        <li className='marg'><Link to="/Hotels" className="NavDiv">Hotels</Link></li>
        <li className='marg'><Link to="/Contact" className="NavDiv">Contact us </Link></li>
        <li className='marg'><Link to="/Location" className="NavDiv">Locations</Link></li>
        
        <li className='marg'><Link to="/Partners" className="NavDiv" id="seperate">Our Partners</Link></li>
        </ul>
        
      </div>


<Switch>
  <Route exact path="/"><Home/></Route>
  <Route path="/Abtcomp"><AboutUs/></Route>
  <Route path="/Hotels"><Hotel/></Route>
  <Route path="/Contact"><Contact/></Route>
  <Route path="/Location"><Location/></Route>
  <Route path="/Partners"><Sponsor/></Route>
</Switch>


      </Router>
    </div>
  )
}
export default App