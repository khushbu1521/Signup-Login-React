import {combineReducers} from 'redux'
import ProductReducer from "./productReducer";
import  LoginReducer from './loginReducer';
import RegistrationReducer from "./registerReducer";

const appReducer = combineReducers({
    register: RegistrationReducer,
    loginData: LoginReducer,
    userProduct : ProductReducer   
});

export default appReducer;