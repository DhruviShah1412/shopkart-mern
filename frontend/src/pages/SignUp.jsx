import React, { useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
 const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8000/api/auth", { email, password, role:"user" })
            alert("Sigup Form is submitted!!")
             navigate('/login')
        }
        catch (err) {
            alert(err)
        }

    }
    return (
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-4">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <Button className={'btn-primary w-100'} title={'Sign Up'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp