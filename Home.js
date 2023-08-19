import React,{useState} from "react";
import './Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {

    const[name,setName]=useState("")
    const[number,setNumber] = useState("")
    const[email,setEmail]=useState("")
    const[last,setLast]=useState("")
    const [error,setError]=useState(false)
   

const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.length===0  || email.length===0 || number.length===0 || number.length<=9 || isNaN(number)===true || last.length===0){
        setError(true)
    }else{ 
    console.log(name,number,email,last)
    document.getElementById("spa").innerHTML="Thank you! We will talk to you soon."
    } 
}

    return(
        <div>
            <div className="container-fluid anim">
<h1 className="text-center">Welcome to La Villa Royale.</h1>
<br/>
<br/>
<br/>
<p className="move  blockquote-reverse">Welcome to La Villa Royale. We are one of the best hotel companies in the world.!<br/>
Click on one of the options above to learn some new things about us!</p>
<br/>
<br/>
<div className="container a">
<form className="form-row" onSubmit={handleSubmit} method="GET" target="_blank" action="https://dentistferndale.com/wp-content/uploads/2018/06/TALK-TO-YOU-SOON.png">
<h1 className="text-center">Talk to Us:</h1>
<div className="row">
    <div className=" col-md-4">
  
      <label for="inputEmail4">Name:</label>
      <input type="text" class="form-control " onChange={e=>setName(e.target.value)}  placeholder="First Name"/>
      
    </div>
    <div className="col-md-4">
        <br/>
    <input type="text" class="form-control "   placeholder="Middle Name*"/> 
    </div>
    <div className="col-md-4">
        <br/>
    <input type="text" class="form-control " onChange={e=>setLast(e.target.value)}  placeholder="Last Name"/> 
    </div>
    </div>


    {error && name.length<= 0 
?

<label className="form-val ">*Please put your First  name. </label>:
""}

 {error && last.length<= 0 
?

<label className="form-val ">*Please put your Last  name. </label>:
""}
   
 
   
    <div class="form-group col-md-6">
        <br/>
        <label>Phone Number:</label>
      <input type="text" className="form-control " placeholder="Phone number" onChange={e=>setNumber(e.target.value)} ></input>
    </div>
    {error && number.length<=0 
?

<label className="form-val ">*Please enter your phone number. </label>:
""} 
{error && number.length <=9  
?

<label className="form-val ">*The phone number must have  10 characters. </label>:
""} 

{error && number.length >11  
?

<label className="form-val ">*The phone number must have  10 characters. </label>:
""} 


{error &&   isNaN(number)===true
?

<label className="form-val ">*Please don't add other letters/symbols into the phone number. </label>:
""} 

   <br/>
   
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email:</label>
      <input type="email" class="form-control "  onChange={e=>setEmail(e.target.value)}  placeholder="Email"/>
    </div>
    
    {error && email.length===0 
?

<label className="form-val ">*Please enter an email. </label>:
""}
  
<br/>
<br/>

<span id="spa"></span>
<br/>
<br/>
<p className="text-center se"> You can also call us by dialing 1-800-999-Villa.</p>
<p className="text-center se">Find us on Instagram, Facebook, and Twitter @RaYaLVillaS_281</p>

     <input type="submit" number="Submit" className="btn btn-success"></input>
    <br/>

</form>
<br/>
<br/>
</div>
<br/>
<br/>
<p className="text-center">* is optional.</p>
</div>
        </div>
    )
}
export default Home