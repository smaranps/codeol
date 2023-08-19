import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'

function AboutUs(){
return(
    <div id="about" className="container-fluid">
        <h1 className="text-center">Made for Luxury.</h1>
        <br/>
        <p className="text-center">We were made in 2023 by Smaran.<br/>
         We also have a lot of important people. Here are a few.</p>
         <br/>
         <br/>
         <div className="container row">
            <div className="col-md-3">
         <div class="card hjk" id="smar">
  <img class="card-img-top" src="https://demoscheduling.s3.ap-south-1.amazonaws.com/studentProfile/1656867141488-Screenshot%202022-06-13%20160904.jpg" alt="Our CEO"/>
  <div class="card-body">
    <h5 class="card-title text-center">Smaran Pinisetty</h5>
    <p class="card-text text-center text-muted">CEO & Founder of Royal Villas. <br/>Toronto, Ontario.<br/><br/><br/></p>
    </div>

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk"  >
  <img class="card-img-top" src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" alt="Our CEO"/>
  <div class="card-body">
    <h5 class="card-title text-center">Rafael Fabian</h5>
    <p class="card-text text-center text-muted">Managing Director of Royal Villas. <br/>Houston,Texas.<br/><br/><br/></p>
    </div>  

    
  </div>
  </div>
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://i.pinimg.com/736x/48/05/b6/4805b6808092396fdd1c180cc8cc77f0.jpg" alt="Our CEO"/>
  <div class="card-body">
    <h5 class="card-title text-center">Manfred Bishop</h5>
    <p class="card-text text-center text-muted"> Director of Royal Villas. <br/>Manchester, England<br/><br/><br/></p>
    </div>

    
  </div>
  </div>
  
  <div className="col-md-3">
         <div class="card hjk" >
  <img class="card-img-top" src="https://media.istockphoto.com/id/1205525828/photo/close-up-portrait-of-a-brutal-bearded-indian-man.webp?b=1&s=170667a&w=0&k=20&c=L817zyCn7_55tPepadBiADuJiukdGvR0pxsL_W95ba4=" alt="Our CEO"/>
  <div class="card-body">
    <h5 class="card-title text-center">Mohinder Schmidt</h5>
    <p class="card-text text-center text-muted"> Manager of Royal Villas. <br/>Munich, Germany<br/><br/><br/></p>
    </div>

    
  </div>
  </div>
  

  {/* End Card */}
 
</div>
<br/>
  <br/>
  <h2 className="text-center ">Our Mission:</h2>
  <p className=" text-center">Our goal is to make some of the best hotels in the world and by making them affordable for everyone.<br/>
  We hope that one day this dream can come true.</p>  
    </div>
)
}
export default AboutUs