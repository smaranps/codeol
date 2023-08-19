import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buy.css'
function Buy(){
    const[name,setName]=useState("")
    const[number,setNumber] = useState("")
    const[to,setTo] = useState("")
    const[from,setFrom] = useState("")
    const[last,setLast] = useState("")
    const[email,setEmail]=useState("")
    const [error,setError]=useState(false)
   

const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.length===0  || email.length===0 || number.length===0 || number.length<=9 || isNaN(number)===true || last.length===0 || from.length===0 || to.length===0){
        setError(true)
    }
    else{
        console.log(name,last,number,email)
        document.getElementById("spanw").innerHTML="Your stay has been booked! We hope you enjoy our luxurious hotel."
  alert("Your Stay at our hotel is booked!")
    }
}
    return(
        <div>
            <br/>
<h2 className="text-center">Book your Tickets:</h2>
<br/>
<br/>
<div className="container jkp bg-info"> 
<h2 className="text-white text-center">Book Tickets</h2>
<br/>
<form className="form-group form-inline" onSubmit={handleSubmit}>
<div className="row">
    <label className="text-white">Name:</label>
    <div className="col-md-6">
<input type="text" className="form-control jklk" onChange={e=>setName(e.target.value)} placeholder="First Name"/>
    </div>
   
    <div className="col-md-6">
<input type="text" className="form-control jklk"  onChange={e=>setLast(e.target.value)} placeholder="Last Name"/>
    </div>
    <br/>
    
</div>
<br/>
{error && name.length<= 0 
?

<label className="form-val jklk">*Please put your First  name. </label>:
""}
{error && last.length<= 0 
?

<label className="form-val ">*Please put your Last name. </label>:
""}
<br/>
<div className="container">
<label className="text-white">Email:</label>
<input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} className="form-control jklk"/>
</div>
<br/>
{error && email.length<= 0 
?

<label className="form-val jklk">*Please put your Email. </label>:
""}
<br/>
<div className="container">
<label className="text-white">Number:</label>
<input type="text" placeholder="Phone Number"  onChange={e=>setNumber(e.target.value)} className="form-control jklk"/>
</div>
<br/>
{error && number.length<= 0 
?

<label className="form-val jklk ">*Please put your Phone Number. </label>:
""}
<br/>
{error && number.length<=9 
?

<label className="form-val jklk ">*A phone number must have atleast 10 characters. </label>:
""}
<br/>
{error &&  isNaN(number)===true
?

<label className="form-val jklk ">*Please don't add symblos/letters to your number. </label>:
""}
<br/>
<div className="row">
<div className="container  col-md-6">
<label className="text-white">From:</label>
<input type="date"  onChange={e=>setFrom(e.target.value)}  className="form-control jklk" required/>

</div>
<div className="container  col-md-6">
<label className="text-white">To:</label>
<input type="date"  onChange={e=>setTo(e.target.value)}  className="form-control jklk" required/>

</div>
</div>
<br/>
<label  className="text-white"> Payment:</label>
<div className="container">


    <select className="jklkl"> 
        <option value="Credit">Credit Card</option> 
        <option value="debit">Debit Card</option> 
        <option value="Cash">Cash</option> 
        <option value="E-Transfer">E-Transfer</option> 
    </select>
  <br/>
  <br/>
  <input type="submit" number="Submit" className="btn btn-success jklk"></input>

</div>
</form>
<br/>
<br/>
<span id="spanw" className="text-center"></span>
</div>
<br/>
<br/>
        </div>
    )
}
export default Buy