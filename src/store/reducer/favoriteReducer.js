import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../types";
import { getLocalStorage } from "../../utils/localStorage";


const initialState = getLocalStorage('store')


const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE:
            const newObj = JSON.parse(JSON.stringify(state))
            delete newObj[action.payload]
            return {
                ...newObj
            }

        default:
            return state;
    }
}

export default favoriteReducer;