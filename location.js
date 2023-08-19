import React from "react";
import './loc.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function location(){
    return(
        <div className="loc container-fluid">
            <h1 className="text-center">Our Locations:</h1>
            <br/>
            <br/>
            <p className="text-center">This map shows our hotels all around our world. Have a look at them and find the closest luxury near you today!</p>
     <br/>
     <br/>
     <img alt="Our Locations" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Marriott_hotels_map.png" className="dswa"/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      
      <p className="text-center">We hope you picked your closest luxury hotel! You can book them by going the "Hotels" section above. There, you can book your stay today!</p> 
      <br/>
       <br/>
       <br/>
      
        </div>
    )
}
export default location