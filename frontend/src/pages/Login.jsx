import React, { useState } from 'react'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
     const [email, setEmail] = useState()
        const [password, setPassword] = useState()
    const navigate = useNavigate()
        const handleSubmit = async (e) => {
            e.preventDefault()
    
            try {
                const res = await axios.post("https://shopkart-mern-backend.onrender.com/api/auth/login", { email, password })
                alert("Login successfull!!")

                localStorage.setItem("token",res.data.token)
                localStorage.setItem("role",res.data.user.role)
                localStorage.setItem("userId",res.data.user.userId)
                navigate('/')
            }
            catch (err) {
                alert(err)
            }
    
        }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-4">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)}  aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 d-flex ">
                                <p>Don't have an account?</p> 
                                <Link to={'/signup'}>Sign Up Now</Link>
                            </div>
                           <Button className={'btn-primary w-100'} title={'Login'} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login