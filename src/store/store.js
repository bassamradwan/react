
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import combineReducers from './combine';
import reducer from './Reducer';



const store=createStore(combineReducers,applyMiddleware((thunk)))


export default store