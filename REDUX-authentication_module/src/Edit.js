import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./Edit.css"
import { addUsers, getSingleUsers } from './REDUX/Action/postAction';
import { userAction } from './REDUX/Action/userAction';

const Edit = ({users}) => {
    const [fname, setFname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const params = useParams();


    console.log(params)
    const navigate = useNavigate();
    let dispatch = useDispatch(); 

useEffect(() => {
    
},[])

// const getSingleUsersData = async () => {
//   console.warn(params);
  
//   let result = await fetch(`http://localhost:4000/users/editShow/${params._id}`);
//   result = await result.json();
//   setFname(result.name)
//   setPhone(result.phone)
//   setEmail(result.email)
//   setPassword(result.password)
//   setRepassword(result.repassword)
// }

function editSubmit() {
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
console.warn(fname,password,repassword);        
      //  dispatch(getSingleUsers(fname,password,repassword))
      //  dispatch(userAction());
        navigate("/dashboard");
  
      }
     
return (
<>
<div className='home'>
<div class="container rounded mt-5">
        <div class="row">
            <div class="col-md-8">
                <div class="p-3 py-5">
                <h1 style={{fontSize:"30px", textAlign:"center", marginLeft:"268px",marginTop:'-35px', fontWeight:"700"}}>Edit Profile</h1>
                <hr style={{color:"black", height:"5px", marginTop:"10px",width:"154%"}}/>     
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex flex-row align-items-center back"><i style={{fontSize:"28px", margin:"5px",color:"green"}} className="zmdi zmdi-long-arrow-return"></i>
                            <h6 style={{fontSize:"18px",paddingTop:"6px",fontWeight:"700", color:"green"}}><Link to="/dashboard">Back to home</Link></h6>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                        <input type="text" className="form-control"
                        placeholder='Name'
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}/>
                        </div>
                    </div>
              <small id="fnameError" ></small>

                    <div class="row mt-3">
                    <div class="col-md-6"><input 
                    type="text" 
                    class="form-control" 
                    placeholder="Phone number"
                    value={phone}
                    /></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6"><input 
                        type="text" 
                        class="form-control" 
                        placeholder="Email"
                        value={email}
                        /></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                        <input type="password" class="form-control" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
              <small id="passwordError" ></small>
                        </div>

                        <div class="col-md-6">
                        <input type="password" class="form-control" placeholder="Confirm Password"
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)} />
              <small id="repasswordError" ></small>
                        </div>
                    </div>

                    <div className="row">
                    <div class="mt-4 col-md-3">
                    <Link to="/dashboard">
                    <button class="btn btn-primary profile-button-1" 
                    type="button">Cancel</button>
                    </Link>
                    </div>
                    <div class="mt-4 col-md-6">
                    <button class="btn btn-primary profile-button"
                    type="button"
                    onClick={editSubmit}>Save Changes</button>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</>
)
}

export default Edit
