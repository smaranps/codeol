import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hotels.css'
import Buy from "./Buy.js";
import{
Link,
Route,
BrowserRouter as Router,
Switch
}from 'react-router-dom'
function Hotel(){
    return(
        <div id="mainsd">
<h1 className="text-center">Book your nearby Luxury today.</h1>
<br/>
<br/>
<Router>
<div className="container row">
            <div className="col-md-3">
         <div class="card hjk" id="smar">
  <img class="card-img-top" src="https://jingdaily.com/wp-content/uploads/2014/12/The-Castle-Hote_a-Luxury-Collection-Hotel_Dalian_1.jpg" alt="Smaran Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">Smaran Inn</h5>
    <p class="card-text text-center text-muted">A good luxury hotel with premium suites and breakfast included. This is our flagship flat. <br/> <br/><h5>$678 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl" >Book</Link>
    <br/>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=4565cfa9-7fd5-ea11-8d76-005056a855ed" alt=" Glamour Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">Glamour Inn & Suites</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with premium suites and breakfast included. This hotel is great for a long vacation. <br/> <br/><h5>$184 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://www.pocketwanderings.com/wp-content/uploads/2022/03/St-Regis-Rome.jpg" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center">Luxury Inn Resort.</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with premium suites and breakfast included. This hotel is great for a nice luxurious stay. <br/> <br/><h5>$209 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
     </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2017/07/hotel-du-palais-biarritz.jpg?ssl=1" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center"> Trench Island Resort.</h5>
    <p class="card-text text-center text-muted">A  luxury resort with premium suites and breakfast included. This hotel is great for a good time at the islands. <br/> <br/><h5>$184 / Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
     </div>

    
  </div>
  </div>
  
 {/* End Div */}
</div>
<br/>
<div className="container row">
            <div className="col-md-3">
         <div class="card hjk" id="smar">
  <img class="card-img-top" src="https://hips.hearstapps.com/hmg-prod/images/luxury-hotels-london-1-1629110849.jpeg" alt="Smaran Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">Mansion Inn & Suites</h5>
    <p class="card-text text-center text-muted">A good luxury hotel with premium suites and breakfast included. This is our flagship flat  in London. <br/> <br/><h5>$215 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://www.luxurytravelmagazine.com/images/article/2019June/top_luxury_hotels_south_africa_b.jpg" alt=" Glamour Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">Hotel Milano</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with  suites and breakfast included. This hotel is great for a good stay in Milan. <br/> <br/><h5>$143 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://i0.wp.com/elopeinparis.com/wp-content/uploads/2014/02/parishotel.jpg?ssl=1" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center">Francais Inn.</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with premium suites and French breakfast included. This hotel is for a good stay in Paris. <br/> <br/><h5>$231 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
     </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://www.saturdayeveningpost.com/wp-content/uploads/satevepost/Hotels-Slideshow.jpg" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center"> Harbour Inn.</h5>
    <p class="card-text text-center text-muted">A  great affordable resort with suites and breakfast included. This hotel is great for a small stay. <br/> <br/><h5>$120 / Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
     </div>

    
  </div>
  </div>
  
 {/* End Div */}
</div>
<br/>
<div className="container row">
            <div className="col-md-3">
         <div class="card hjk" id="smar">
  <img class="card-img-top" src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/09/09141958/Featured-Image-28.jpeg" alt="Smaran Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">La Villa Royale</h5>
    <p class="card-text text-center text-muted">This is the La Villa Royale. Our great hotel. This has everything you need. Just sit back and relax. <br/> <br/><h5>$632 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://www.forbesindia.com/media/images/2023/Jun/img_209937_lead_bg_rambag_gettyimages.jpg" alt=" Glamour Inn"/>
  <div class="card-body">
    <h5 class="card-title text-center">Hotel Taj</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with  suites and breakfast included. This hotel is great for a good stay in Agra. <br/> <br/><h5>$162  /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5d2a3eee34a5c400084b4478/Palacio-Duhau-hotel-in-Buenos-Aires/960x0.jpg?fit=scale" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center">Buenos Resort.</h5>
    <p class="card-text text-center text-muted">A  luxury hotel with premium suites and breakfast included. This hotel is for a good stay in Buenos Aires. <br/> <br/><h5>$184 /Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>

     </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://begasvaby.com/wp-content/uploads/2022/08/Venetian-hotel-interior-Top-luxury-hotels-in-Las-Vegas.jpg" alt="Luxury Inn Resort "/>
  <div class="card-body">
    <h5 class="card-title text-center"> Arabic Inn.</h5>
    <p class="card-text text-center text-muted">A  resort with suites and breakfast included. This hotel is great for Arabs or tourists who are in Dubai. <br/> <br/><h5>$210 / Night</h5></p>
    <br/>
    <Link to="/Buy" className="btn btn-info jkl">Book</Link>
     </div>

    
  </div>
  </div>
  
 {/* End Div */}
</div>

<Switch>
    <Route exact path="/"><Hotel/></Route>
    <Route  path="/Buy"><Buy/></Route>
</Switch>
</Router>
        </div>
        
    )
}
export default Hotel