import React, { useState } from 'react'
import './Login.css'
import { Button, TextField } from '@material-ui/core'
import { auth } from '../firebase'
import { useHistory, Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Login() {
    const [cred, setCred] = useState({
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
    const login = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(cred.email, cred.password)
        .then(res => {
            history.push('/')
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img className="login__logo__1" src="https://th.bing.com/th/id/R2c5238249d23b1b90b4c3a1cf1bde0fb?rik=LG7iZL6Z6f8VJg&pid=ImgRaw" alt="logo"/>
                <img className="login__logo__2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_(2019).svg/1200px-Facebook_Logo_(2019).svg.png" alt="text"/>
            </div>
            <form>
                <h3>Sign In</h3>
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
                <Button disabled={!(cred.email && cred.password)} type='submit' onClick={login}>Sign In</Button>

                <span>Don't have an account?<Link to='/signup'> Create one</Link></span>
            </form>
        </div>
    )
}

export default Login
