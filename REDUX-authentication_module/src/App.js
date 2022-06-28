import React, { useEffect, useState } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './REDUX/Action/userAction'
import Dashboard from './Dashboard'
import Edit from './Edit'
import Logout from './Logout'

const App = () => {

  const [user, setUser] = useState(null)

const dispatch = useDispatch();

const userList = useSelector(state => state.userList);
const {loading, users, error} = userList;

useEffect(() => {
  // let userList=localStorage.getItem('userList');
  let IS_LOGIN=localStorage.getItem("isLogin")
  IS_LOGIN ? setUser(true) : setUser(false);
}, [])

useEffect(() => {

  dispatch(userAction())
},[dispatch]);

return (
<>
<Router>
<Navbar/>
  <Routes>
{user && (
  <>
    <Route path="/dashboard" element={<Dashboard loading={loading} error={error} users={users}/>}/>
    <Route path="/edit/:_id" element={<Edit users={users}/>} />
    <Route path="/logout" element={<Logout loggedOut = {() => setUser(false)} />} />
    </>
    )}

  {!user && (
    <>
    <Route path="/login" element={<Login users={users} authenticate={()=>setUser(true)}/>}/>
    <Route path="/register" element={<Register />} />
    </>
    )}
    <Route path='*' element={
    <Navigate to={user?"/dashboard":"/login"}/>}/>
  </Routes>
</Router>
</>
  )
}

export default App







