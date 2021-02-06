import * as types from './actionType';
// import { registerUser, login} from '../../services';

export const registration = (userInfo) => {
    // registerUser(userInfo);
    let registeredUsers = JSON.parse(localStorage.getItem('registerdUsers')) || [];

    let index = registeredUsers.findIndex(regUser => regUser.email === userInfo.email);
    if(index == -1) {
        registeredUsers.push(userInfo);
        localStorage.setItem('registerdUsers', JSON.stringify(registeredUsers));
        return dispatch => {
            dispatch({ type: types.SIGN_UP, payload: userInfo});
        }
    } else {
        return dispatch => {
            dispatch({ type: types.SIGN_UP_ERROR, payload: "This user is already registerd.."});
        }
    }   
}

export const login = (userInfo) => {
    let registeredUsers = JSON.parse(localStorage.getItem('registerdUsers')) || [];
    let index = registeredUsers.findIndex(regUser => regUser.email == userInfo.email && regUser.password == userInfo.password);
    if(index != -1) {
        localStorage.setItem('user', userInfo);
        return dispatch => {
            dispatch({ type: types.SIGN_IN, payload: userInfo });
        }
    } else {
        return dispatch => {
            dispatch({ type: types.SIGN_IN_ERROR, payload: "Username or password is incorrect" });
        }
    }    
}

export const deleteProduct = (user) => {
    return dispatch => {
        dispatch({ type: types.DELETE_USER_PRODUCT, payload: user });
    }
}

export const searchProducts = (searchText) => {
    return dispatch => {
        dispatch({ type: types.SEARCH_PRODUCT, payload: searchText });
    }
}