import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h1 style={{color:"white"}}>{"<"}<span style={{color:"cyan", fontFamily:" 'Lobster', cursive"}}>Authentication</span>{"/>"}</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  ">
        <li className="nav-item">
          <a className="nav-link active text-$green" aria-current="page" style={{color:"rgb(2, 254, 2)", fontSize:"20px", fontWeight:"700"}} href="/dashboard">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register" style={{color:"rgb(2, 254, 2)", fontSize:"20px", fontWeight:"700"}}>About</a>
        </li>

        <button type="button" onClick={() => navigate('/logout')} className="btn btn-danger "><b> Log Out </b></button>


      </ul>
      {/* <div>
      
         <img width="80px" height="80px" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Image Not Available" />
         <span className='counter'>{props.data.length}</span>
          </div> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
