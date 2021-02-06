import React,{Fragment, PureComponent} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import Login from "./container/login";
import UserProduct from './container/productContainer';
import PrivateRoute  from './components/privateRoute';
import Signup from "./container/registration";

class App extends PureComponent {  
  render(){
    return (
      <Fragment>
        <Provider store={store}>
          <Switch>
            <PrivateRoute component={UserProduct} path="/" exact />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup}/>
            <Route component={Login} />
          </Switch>
        </Provider>
      </Fragment>
    );
  }  
}

export default App;
