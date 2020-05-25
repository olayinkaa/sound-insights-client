import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="card rounded shadow shadow-sm">
                                <div className="card-header">
                                    <h3 className="mb-0 text-center">Sign up for an Account</h3>
                                </div>
                                <div className="card-body">
                                    <form autoComplete="off" noValidate>
                                        <div className="form-group">
                                            <label htmlFor="uname1">Full Name</label>
                                            <input 
                                            type="text" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="name" 
                                            required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="uname1">Username</label>
                                            <input 
                                            type="email" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="email" 
                                            required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                            type="password" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="password"
                                            required 
                                            autoComplete="new-password" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input 
                                            type="password" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="password_confirmation"
                                            required 
                                            autoComplete="new-password" 
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-lg btn-block" disabled>Register</button>
                                    </form>
                                    <p className="p-2">
                                        Already have an account? <Link to="/login" className="text-primary">Sign In</Link>
                                    </p>
                                    <p className="p-1">
                                        <Link to="/" className="text-primary">Back Home</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Login
