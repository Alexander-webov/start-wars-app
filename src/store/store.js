import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducers } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocalStorage } from "../utils/localStorage";


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;