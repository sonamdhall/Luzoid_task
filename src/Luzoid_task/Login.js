import React,{useState} from 'react';
import './Task_css.css';
import {useNavigate } from 'react-router-dom';


export default function Login(){
	const [loginemail,setEmail]=useState("");
	const [loginpassword,setPassword]=useState("");
	
	const navigate=useNavigate();

	
	const handlesubmit=(event)=>{
		event.preventDefault();
		var val1=localStorage.getItem('email');
		   var val2=localStorage.getItem('password');
		if(val1===loginemail && val2===loginpassword ){
		alert("Login is successful");
		navigate('/list');
	}
	else{
			alert("login credentials are incorrect");
		}
		  
	}
  return (
  <>
  <form onSubmit={handlesubmit}>
 <div className="login">
 <h1 className=" mb-5 text-center text-primary">LOGIN FORM</h1>
   <div class="mb-3 row justify-content-center ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="exampleFormControlInput1" value={loginemail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
    </div>
  </div>
  
  <div class="mb-3 row justify-content-center">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="inputPassword" min="6" svalue={loginpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required/>
    </div>
    </div>
	<p className="p1">Forgot password?</p>

  

 <button type="submit" id="btn2" >Login</button>
 <p className="p2">Not a member? Signup now</p>
 </div>
</form>
  </>
  );
}