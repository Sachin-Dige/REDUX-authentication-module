import { ADD_USERS, DELETE_USERS, GET_SINGLE_USERS } from "../Constants/userConstants";
import axios from "axios";

export const addUsers = (name,phone,email,password,repassword) => {
    return (dispatch) => {
        axios.post('http://localhost:4000/users/regPost', {name,phone,email,password,repassword})
        .then(response => {
          console.log(response);
          dispatch({
            type: ADD_USERS,
            payload: response.data
          })
        })
          .catch(error => {
            console.log(error);
        })
    }
}

export const deleteUsers = (_id) => dispatch => {
    
        axios.delete(`http://localhost:4000/users/${_id}`)
        .then((delUserData)=>
          dispatch({
            type: DELETE_USERS,
            payload: delUserData
          }))
        
          .catch(error => {
            console.log(error);
        })
    }

    export const getSingleUsers = (_id) => dispatch => {
    
      let res = axios.get(`http://localhost:4000/users/editShow/${_id}`)
        dispatch({
          type: GET_SINGLE_USERS,
          payload: res.data
        })
      
  }


// export const getSingleUsers = (id,name,password,repassword) => dispatch => {
    
//         axios.put(`http://localhost:4000/users/${id}`,{name,password,repassword})
//         .then((editUserData)=>{
//         console.log("editUserData", editUserData);

//           dispatch({
//             type: GET_SINGLE_USERS,
//             payload: editUserData.data
//           })})
        
//           .catch(error => {
//             console.log(error);
//         })
//     }


