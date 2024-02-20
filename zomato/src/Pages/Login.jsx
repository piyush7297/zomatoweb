import React from 'react'
import Header from '../Common/Header'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-6 mx-auto bg-danger text-white text-center p-4 rounded-3">
                            <span className='p-2'>
                                <h2>
                                    Login Here
                                </h2>
                            </span>
                            <div className='fw-bold text-black'>
                                <div class="mb-3 row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" readonly className="form-control-plaintext shadow-none p-3  bg-light rounded" id="staticEmail" placeholder='Enter your Email here'/>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputPassword"  className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" placeholder='Enter Your Password' className="form-control shadow-none p-3 bg-light rounded" id="inputPassword"/>
                                    </div>
                                </div>
                                <button className='border-0 bg-dark text-white px-5 fw-bold  rounded-2 p-1'>LOGIN</button>
                                <h5 className='mt-4'>New on Zomato?</h5>
                                <Link to={'/signup'} className='text-decoration-none text-white'>
                                <h5 className='text-white'>Create Account</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
