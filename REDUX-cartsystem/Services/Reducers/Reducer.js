import { ADD_TO_CART} from "../constants"

const intialState={cardData:[]}

export default function cardItem (state = [],action) {
    switch(action.type){
        case ADD_TO_CART : 
        // console.warn("REDUCER",action);
            return [
                ...state,
                {cardData: action.data}
            ]


        default:
            return state

        }

}