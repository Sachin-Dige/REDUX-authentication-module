import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { connect, useDispatch } from 'react-redux'
import {addUsers} from './REDUX/Action/postAction'
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Style.css"
import { userAction } from './REDUX/Action/userAction';

const Register = () => {
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  
  let dispatch = useDispatch(); 
  const navigate = useNavigate();
  
    function handleSubmit() {
      let validationFlag = true;
  
      if (!fname) {
        document.getElementById("fnameError").innerHTML = "User-name is required.";
        validationFlag = false
      } else if (fname.length > 15) {
        document.getElementById("fnameError").innerHTML = "Name should be maximum 15 characters.";
        validationFlag = false
      } else {
        document.getElementById("fnameError").innerHTML = "";
      }
      
      if (!phone) {
        document.getElementById("phoneError").innerHTML = "Phone number is required.";
        validationFlag = false
      } else if (phone.length > 10 || phone.length < 10) {
        document.getElementById("phoneError").innerHTML = "Phone number should be of 10 digit.";
        validationFlag = false
      } else {
        document.getElementById("phoneError").innerHTML = "";
      }
    
      if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required.";
        validationFlag = false
      } else if (!validateWithPatternEmail(email)) {
        document.getElementById("emailError").innerHTML = "Email should be a valid.";
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
  
      if (!repassword) {
        document.getElementById("repasswordError").innerHTML = "Confirm Password is required";
        validationFlag = false
      } else if (password !== repassword) {
        document.getElementById("repasswordError").innerHTML = "Password is not matched.";
        validationFlag = false
      } else {
        document.getElementById("repasswordError").innerHTML = "";
      }
   
      if (!validationFlag) {
        return false
      }
      // let headerList = {
      //   "Content-Type": "application/json"
      // }
      
      // let bodyContent = JSON.stringify({
      //   "name": fname,
      //   "phone": phone,
      //   "email": email,
      //   "password": password,
      //   "repassword": repassword,
      // });
      
      // fetch("http://localhost:4000/users/regPost", {
      //   method: "POST",
      //   body: bodyContent,
      //   headers: headerList
      // }).then(function (data) {
      //   console.log(data);
      // })
    
      
     dispatch(addUsers(fname,phone,email,password,repassword))
     dispatch(userAction());
      navigate("/login");

    }
    
    // window.location.pathname="/";
    
    function validateWithPatternEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
return (
<>
<div className="global-container">
    <div className='card register-form'>
        <div className="card-body">
        <i class="zmdi zmdi-account-calendar"></i>
        <h1 className='card-title text-center' style={{fontFamily:"Sansserif"}}>Create Account</h1>
        <hr style={{color:"white", height:"5px", marginTop:"10px"}}/>
            <div className="card-text">
            <form>
              <div className='form-group'>
                  <label For="exampleInputName">Full Name</label>
                  <input
                   type="text"
                   className='form-control form-control-sm' 
                   value={fname}
                   onChange={(e) => setFname(e.target.value)}
                   />
              </div><small id="fnameError" ></small>

              <div className='form-group'>
                  <label For="exampleInputNumber">Phone No.</label>
                  <input
                   type="number"
                   className='form-control form-control-sm' 
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   />
              </div><small id="phoneError" ></small>

              <div className='form-group'>
                  <label For="exampleInputEmail">Email Address</label>
                  <input
                   type="email"
                   className='form-control form-control-sm'  
                   value={email} 
                   onChange={(e) => setEmail(e.target.value)}
                   />
              </div><small id="emailError"></small>

              <div className='form-group'>
                  <label For="exampleInputPassword1">Password</label>
                  <input
                   type="password"
                   className='form-control form-control-sm' 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   />
              </div><small id="passwordError" ></small>

              <div className='form-group'>
                  <label For="exampleInputRePassword">Confirm Password</label>
                  <input
                   type="password"
                   className='form-control form-control-sm'  
                   value={repassword}
                   onChange={(e) => setRepassword(e.target.value)}
                   />
              </div><small id="repasswordError" ></small>
              
                <button 
                type='button' 
                className='btn2 btn-primary btn-block'
                onClick={handleSubmit}
                >Register</button>

                <div className="Link">
                    Already have account? <Link to='/login'>Login Now</Link>
                </div>
            </form>
            </div>
        </div>
    </div>    
    {/* <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    /> */}
</div>      
</>
)
}

export default connect(null, { addUsers }) (Register);
