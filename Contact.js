import React ,{useState} from "react";
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact(){
    const[name,setName]=useState("")
    const[number,setNumber] = useState("")
    const[email,setEmail]=useState("")
    const[msg,setMsg]=useState("")
    const [error,setError]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.length===0  || email.length===0 || number.length===0 || number.length<=9 || isNaN(number)===true || msg.length===300){
            setError(true)
        }else{ 
        console.log(name,number,email,)
        document.getElementById("asg").innerHTML="Thanks for reaching out to us! We will answer your questions soon through email and we will also give a call." 
        } 
    }    
return(
    <div id="sdsas">
<h1 className="text-center">Contact us:</h1>
<br/>
<br/>
<div className="container-md jkljii bg-warning">
    <h3 className="text-center">Talk To us:</h3>
<form className="form-group" onSubmit={handleSubmit}>
<div className="row">
<div className="col-md-6">
    <label className="jakl">Name:</label>
    <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)} className="form-control jakl"/>
    
</div>
</div>
{error && name.length<= 0 
?

<label className=" texw">*Please enter your First  name. </label>:
""}
<br/>
<div className="col-md-6">
    <label className="jakl">Email:</label>
    <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} className="form-control jakl"/>
    
</div>
{error && email.length<= 0 
?

<label className=" texw">*Please enter your Email. </label>:
""}
<br/>
<div className="col-md-6">
    <label className="jakl">Phone Number:</label>
    <input type="text" placeholder="Phone Number" onChange={e=>setNumber(e.target.value)} className="form-control jakl"/>
    
</div>
{error && number.length<= 0 
?

<label className=" texw">*Please enter your Phone number. </label>:
""}
{error && isNaN(number)===true 
?

<label className=" texw">*Please don't add any letters to the phone number. </label>:
""}
<br/>
{error && number.length<=9 
?

<label className=" texw">*A phone Number must have atleast 10 characters. </label>:
""}
<br/>
<br/>
<div className="col-md-6">
    <label className="jakl">Message (optional) :</label>
    <textarea rows="5" name="Message:" onChange={e=>setMsg(e.target.value)}  className="form-control jakl" cols="50" maxLength={300}>
        Enter your Message.
        </textarea>
        <br/>
{error && msg.length>=300 
?

<label className=" texw">*Messages can't contain more than 300 characters. </label>:
""}
    
</div>
<br/>
<br/>
<div className="col-md-6">
    <input type="submit" value="Submit" className="btn btn-success kdl" />
</div>
</form>
<br/>
<br/>
<span id="asg" ></span>
<br/>
<br/>
    </div>
    <br/>
    <br/>
    </div>
)
}
export default Contact