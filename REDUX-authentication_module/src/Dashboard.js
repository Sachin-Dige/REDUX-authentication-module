import React from 'react'
import { userAction } from './REDUX/Action/userAction';

import { deleteUsers } from './REDUX/Action/postAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({users}) => {
  const dispatch = useDispatch()                      
  const Del = (id) => {
    dispatch(deleteUsers(id));
    dispatch(userAction())
  }
const navigate = useNavigate();

return (
<>
    
<div className="container" style={{background:"clay"}}>
  <h1 style={{
      color:"blue",
      textAlign:"center",
      marginBottom:"-12px",
      fontWeight:"900"

  }}>DASHBOARD</h1>
   <hr style={{color:"black", height:"5px",marginBottom:"25px"}}/>


  <table className="table table-striped table-hover table-bordered">
  <thead class="bg-black text-white">
      <tr>
        <th>ID</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Password</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      
    { users.map((userList,index)=>(
          
        <tr>
              <td>{index+1}</td> 
              <td>{userList.name}</td> 
              <td>{userList.phone}</td>
              <td>{userList.email}</td>
              <td>{userList.password}</td>
              <td className="zmdi zmdi-delete" style={{color:"red", fontSize:"30px"}} onClick={()=>Del(userList._id)}></td>
              <td> <button className="zmdi zmdi-edit" style={{color:"green", fontSize:"30px"}} onClick={() => navigate(`/edit/${userList._id}`)}></button></td>
          </tr>
    
          ))}

    </tbody>
  </table>
</div>
  
</>
)
}

export default Dashboard
