
import React,{} from 'react';
import {connect} from 'react-redux';
import { registration } from '../redux/actions';

import Signup from '../components/Signup';

const mapStateToProps = state => ({
    registering: state.register.registering
});

const dispatchers = ({ registration });

export default connect(mapStateToProps,dispatchers)(Signup);