import { ADD_USERS, DELETE_USERS, GET_SINGLE_USERS } from "../Constants/userConstants";


const intialState = {
          "name": "",
          "phone": "",
          "email": "",
          "password": "",
          "repassword": "",
}

export let registerReducer = (state = intialState, action) => {
    switch (action.type) {

        case DELETE_USERS:
        case ADD_USERS:
            return {...state,users: action.payload}
        
        case GET_SINGLE_USERS:
            return{...state,users: action.payload}
        
        default:
            return state;
    }
};

