import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({users, authenticate}) => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    
// const getUsers = async()=>{
//   let result = await fetch("http://localhost:4000/users/regShow");
//   result = await result.json();
//   setRecords(result)
// }
  
  function handleSubmitLogin(){
      let validationFlag = true;
        
      
      // let userList=JSON.parse(localStorage.getItem('userList'));
      
      if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required.";
        validationFlag = false
      } else if (!validateWithPatternEmail(email)) {
        document.getElementById("emailError").innerHTML = "Email is not valid";
        validationFlag = false
      } else {
        document.getElementById("emailError").innerHTML = "";
      }
      
      
      if (!password) {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        validationFlag = false
      } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password should be at least 6 characters.";
        validationFlag = false
      } else {
        document.getElementById("passwordError").innerHTML = "";
      }
      
    if (!validationFlag) {
              return false
            }
    
    for(let user of users) {
      if(user.email === email && user.password === password){
        
        localStorage.setItem("isLogin",true);
        document.getElementById("incorrect").innerHTML=""
        authenticate();
        navigate("/dashboard");
       return false
     }else{    
       document.getElementById("incorrect").innerHTML="Email or Password is Invalid!!"    
       validationFlag = false
     }     
 }

     
    }
    function validateWithPatternEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
return (
<>
<div className="global-container">
    <div className='card login-form'>
        <div className="card-body">
        <i class="zmdi zmdi-account-circle"></i>
        <h1 className='card-title text-center' style={{fontFamily:"forte"}}>Login Form</h1>
        <hr style={{color:"white", height:"5px", marginTop:"10px"}}/>
        <small id="incorrect"></small>
            <div className="card-text">
            <form>
              <div className='form-group'>
                  <label For="exampleInputEmail">Email Address</label>
                  <input
                   type="email"
                   className='form-control form-control-sm'
                   value={email}
                   onChange={(event) => setEmail(event.target.value)}
                   />
              </div><small id="emailError"></small>

              <div className='form-group'>
                  <label For="exampleInputPassword1">Password</label>
                  <input
                   type="password"
                   className='form-control form-control-sm'
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}
                   /><small id="passwordError"></small>

                  <a href="/" className='forgetPass'>Forget Password ?</a>
              </div>
              
                <button type='button' onClick={handleSubmitLogin} className='btn1 btn-primary btn-block'>Log in</button>

                <div className="Link">
                    Don't have an account? <Link to = '/register'>Create New</Link>
                </div>
            </form>
            </div>
        </div>
    </div>    
</div>      
</>
)
}

export default Login
