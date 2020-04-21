import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const LoginComponent = ({ email, password, setData, submit, error }) => {
    return (
        <div className="bg-gradient-primary login-wrap ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-sm-12">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bg-login-image"></div>
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                        onChange={e => {
                                                            setData({
                                                                email: e.target.value,
                                                                password
                                                            })
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" placeholder="Password"
                                                        onChange={e => {
                                                            setData({
                                                                password: e.target.value,
                                                                email
                                                            })
                                                        }}
                                                    />
                                                </div>
                                                    {error && <div className="alert alert-danger my-2">{error}</div> }
                                                <button
                                                    className="btn btn-primary btn-user btn-block"
                                                    onClick={submit}
                                                    type="button"
                                                >
                                                    Login
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent