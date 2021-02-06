import React, {useState, useEffect} from 'react';
import './style.css';
import { Paper, TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Login(props) { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(props.logging) {
            props.history.push("/");
        }        
    });

    return(
        <div>        
            <Paper elevation={3} className="card-holder">
                <h3>Login</h3>
                { props.loginError ? <Alert severity="error" className="user-message">
                    Username or password is incorrect                  
                </Alert>: <div/>}
                <div className="form-container">
                    <TextField
                        required
                        type="text"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    
                    <TextField
                        required
                        type="password"
                        label="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />

                    <Button type="button" variant="contained" color="secondary" onClick={(e) => {
                        if(email && password) {                            
                            props.login({
                                email: email,
                                password: password
                            });
                        } 
                    }}> Login</Button>
                </div>
            </Paper>
        </div>    
    )
}

export default Login;

