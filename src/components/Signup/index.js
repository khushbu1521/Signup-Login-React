import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { Alert } from '@material-ui/lab';
import { Paper, TextField, Button } from '@material-ui/core';

function Signup(props) { 
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>        
            <Paper elevation={3} className="card-holder">
                <h3>Registration</h3>

                { props.registering ? <Alert severity="success" className="user-message">
                    Registration successful                   
                    </Alert> : <div/>}
                <form className="form-container">
                    <TextField
                        required
                        type="text"
                        label="firstname"
                        variant="outlined"
                        value={firstname}
                        onChange={(e) => {setFirstname(e.target.value)}}
                    />

                    <TextField
                        required
                        type="text"
                        label="lastname"
                        variant="outlined"
                        value={lastname}
                        onChange={(e) => {setLastname(e.target.value)}}
                    />

                    <TextField
                        required
                        type="email"
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

                    <Button type="button" variant="contained" color="secondary" onClick={(event) => {
                        if(firstname && lastname && email && password) {                            
                            props.registration({
                                firstname: firstname,
                                lastname: lastname,
                                email: email,
                                password: password
                            });
                        }                        
                    }}>
                        SIGN UP
                    </Button>

                    <Link to="/login" className="btn btn-link">Login</Link>
                </form>
            </Paper>
        </div>    
    )
}

export default Signup;

