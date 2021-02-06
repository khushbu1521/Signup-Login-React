
import React,{} from 'react';
import {connect} from 'react-redux';
import { login } from '../redux/actions';

import Login from '../components/Login';

const mapStateToProps = state => ({
    user: state.loginData.user,
    logging: state.loginData.logging,
    loginError: state.loginData.loginError
});

const dispatchers = ({ login });

export default connect(mapStateToProps,dispatchers)(Login);