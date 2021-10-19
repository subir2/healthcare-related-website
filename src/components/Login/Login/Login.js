
import useAuth from '../../../Hooks/useAuth';
import { getAuth, GoogleAuthProvider, signInWithPopup , createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

import initilizeAuthentication from '../Firebase/Firebase.init'

initilizeAuthentication();


const Login = () => {
    const{signInUsingGoogle,setUser}=useAuth();
const [email, setEmail]=useState('')
const [pass, setPass]=useState('')
const [Error, setError]=useState('')
const [isChecked, setIsChecked]=useState('')
// console.log(isChecked)

const location= useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home'
console.log('came from', location.state?.from)
const auth = getAuth();





const hadndalEventChange = (e) =>{
    setEmail(e.target.value)
}

const hadndalEventChangePass = (e) =>{
    setPass(e.target.value)
}


const hadndalEventChecked = (e) =>{
    setIsChecked(e.target.checked)
}

const hadndalregester = (e) =>{
    // console.log(email, pass);
   isChecked ? handleSingin(email, pass) : handleNewUser(email, pass);
    e.preventDefault();
}




const handleNewUser = (email, pass)=>{
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result => {    
      const users = result.user;
      setError('')
      setUser(users);
    })
    .catch(error =>{
      setError(error.message)
  })
}


const handleSingin = (email, pass)=>{
    signInWithEmailAndPassword(auth, email, pass)
    .then(result => {    
      const user = result.user;
      setError('')
      setUser(user)
    })
    .catch(error =>{
      setError(error.message)
  })
}


    return (
        <div className='login-form'>
            <div >
                <img className="login-image" src="https://i.ibb.co/253pMDc/5792795.jpg" alt=""></img>
            </div>
            <div className='from-div'>
                <Form>
                  
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onBlur={hadndalEventChange} type="email" required placeholder="Enter email" />
                        </Form.Group>
                        <br></br>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={hadndalEventChangePass} type="password" required placeholder="Password" />
                        </Form.Group>
                    

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check onChange={hadndalEventChecked} type="checkbox" label="Already Regestered?" />
                    </Form.Group>
                       <p>{Error}</p>
                    <Button id='btn-cls' variant="primary" type="submit"  onClick={hadndalregester}>
                    {isChecked ? 'Sing In':'Regester'}
                    </Button>

                    <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
                    
                </Form>
            </div>
        </div>
    );
};

export default Login;