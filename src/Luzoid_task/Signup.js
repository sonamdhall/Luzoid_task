import React,{useState} from 'react';
import './Task_css.css';


function Signup(){
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const [confirmPassword,setCpassword]=useState("");
	
	
	
	const handlestore=()=>{
		localStorage.setItem("email",email);
		localStorage.setItem("password",password);
		localStorage.setItem("confirmPassword",confirmPassword);
		
	}
	const handlesubmit=(event)=>{
		event.preventDefault();
		if(password.length<5){
			alert("Password should be between 5 to 8 numbers or characters");
		}
		else if(password!==confirmPassword){
			alert("Password does not match");	
		}
		else{
		alert("Signup is successful");
		}
		
	}
  return (
  <>
  <form onSubmit={handlesubmit}>
 <div className="container">
 <h1 className=" mb-5 text-center text-primary">SIGN UP FORM</h1>
   <div class="mb-3 row justify-content-center ">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-4">
      <input type="email" class="form-control" id="exampleFormControlInput1" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
    </div>
  </div>
  
  <div class="mb-3 row justify-content-center">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required/>
    </div>
    </div>

  
  <div class="mb-3 row justify-content-center">
    <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword" value={confirmPassword} onChange={(e)=>setCpassword(e.target.value)} placeholder="Enter password again" required/>
   
    </div>
  </div>

 
 <button type="submit" id="btn1" class="btn btn-primary justify-content-center" onClick={handlestore}>Signup</button>
 </div>
</form>
  </>
  );
}

export default Signup;
