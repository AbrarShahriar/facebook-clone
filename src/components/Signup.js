import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './Signup.css'
import { auth } from '../firebase'
import { useStateValue } from './StateProvider'
import { useHistory, Link } from 'react-router-dom'

function Signup() {
    const [cred, setCred] = useState({
        username: '',
        email: '',
        password: ''
    })
    const history = useHistory()
    const [{ user }, dispatch] = useStateValue()
    const handleChange = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }
    const signUp = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(cred.email, cred.password)
        .then(res => {
            res.user.updateProfile({
                displayName: cred.username
            }).then(() => {
                dispatch({
                    type: 'SET_USER',
                    user: res.user
                })
                history.push('/')
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            alert(err.message);
        })
    }

    return (
        <div className='signup'>
            <div className="signup__logo">
                <img className="signup__logo__1" src="https://th.bing.com/th/id/R2c5238249d23b1b90b4c3a1cf1bde0fb?rik=LG7iZL6Z6f8VJg&pid=ImgRaw" alt="logo"/>
                <img className="signup__logo__2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_(2019).svg/1200px-Facebook_Logo_(2019).svg.png" alt="text"/>
            </div>
            <form>
                <h3>Sign Up</h3>
                <TextField 
                    name='username'
                    value={cred.username}
                    onChange={handleChange}
                    variant='outlined'
                    label='Username'
                    color='primary'
                    type='text'
                />
                <TextField 
                    name='email'
                    value={cred.email}
                    onChange={handleChange}
                    variant='outlined'
                    label='Email'
                    color='primary'
                    type='email'
                />
                <TextField 
                    name='password'
                    value={cred.password}
                    onChange={handleChange}
                    variant='outlined'
                    label='Password'
                    color='primary'
                    type='password'
                />
                <Button disabled={!(cred.username && cred.email && cred.password)} type='submit' onClick={signUp}>Sign Up</Button>

                <span>Already have an account?<Link to='/login'> Login</Link></span>
            </form>
        </div>
    )
}

export default Signup
