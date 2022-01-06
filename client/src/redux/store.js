import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { callapireducers1, callapireducers2 } from "./reducers/callapireducers";
const reducers = combineReducers({
    data:callapireducers1,
    auth:callapireducers2
});



const intialState={
    data:{},
    auth:{}
}
const Store = createStore(reducers, intialState, composeWithDevTools(applyMiddleware(thunk)))
export default Store;





