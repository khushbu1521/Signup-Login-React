import * as types from '../actions/actionType';

const INITIALSTATE = {
    registering: false,
    registrationError: false
};

export const RegistrationReducer = ( state = INITIALSTATE, action) => { 
    switch (action.type) { 
        case types.SIGN_UP:
            return { ...state, registering: true}
        case types.SIGN_UP_ERROR:
                return { ...state, registrationError: true}    
        default: 
            return state;
    }
}

export default RegistrationReducer;