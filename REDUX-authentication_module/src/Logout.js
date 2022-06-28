import React from 'react'
import {useNavigate} from 'react-router-dom'

function Logout({ loggedOut }) {
    
    const navigate = useNavigate();
function logout() {

    loggedOut();
    navigate('/login')

    localStorage.removeItem("isLogin");
    //  localStorage.removeItem("userList");
}
return (
    <>

            <h1>Are You Want To LOGOUT ? </h1>
        <button type="button"onClick={logout} className="btn btn-danger "><b> Log Out </b></button>

    </>
)
}

export default Logout
