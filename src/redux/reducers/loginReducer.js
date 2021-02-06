import * as types from '../actions/actionType';

const INITIALSTATE = {
    logging: false,
    user: null,
    loginError: false
};

export const LoginReducer = ( state = INITIALSTATE, action) => { 
    switch (action.type) { 
        case types.SIGN_IN:
            return { ...state, logging: true, user: action.payload}
        case types.SIGN_IN_ERROR:
                return { ...state, logging: false, loginError: true}    
        default: 
            return state;
    }
}

export default LoginReducer;