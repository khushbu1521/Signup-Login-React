
import React,{} from 'react';
import {connect} from 'react-redux';
import { deleteProduct, searchProducts } from '../redux/actions';

import UserProduct from '../components/userProduct';

const mapStateToProps = state => ({
    user: state.loginData.user,
    products: state.userProduct.products
});

const dispatchers = ({ deleteProduct, searchProducts });

export default connect(mapStateToProps,dispatchers)(UserProduct);