import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    const userId = localStorage.getItem("userId")
const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" className='img-fluid' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>

                            {
                                role === "user" &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="cart">Cart</Link>
                                    </li>

                                </>
                            }

                            {
                                role === "admin" &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="manage-product">Manage Product</Link>
                                    </li>
                                   

                                </>
                            }

                        </ul>

                        {
                            token ?
                                <>
                                    <Button onClick={() => navigate(`/profile/${userId}`)} title={'Profile'} className={'btn-primary'} />

                                    <Link to={'/'} >
                                        <Button onClick={handleLogout} title={'Logout'} className={'m-2 btn-primary'} />
                                    </Link>

                                </>
                                :
                                <Link to={'/login'} >
                                    <Button title={'Login'} className={'btn-primary'} />
                                </Link>
                        }

                        {/* <Button title={'Sign Up'} className={'btn-secondary ms-2'} /> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar