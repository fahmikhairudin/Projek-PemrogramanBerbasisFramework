import React, { Component } from "react";
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2>Form Login</h2>
                <div className="form">
                
                    <form action="">
                        <div className="form-inline">
                            <label htmlFor="Username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Masukan Username" />
                        </div>
                        <div className="form-inline">
                            <label htmlFor="Password">Password</label>
                            <input type="text" name="password" id="password" placeholder="Masukan Password" />
                        </div>
                        <input type="submit" className="submit" value="Login" />
                        <div className="form-inline">
                            <input type="checkbox" name="Remember Me" id="remember-me" checked />
                            <label htmlFor="Remember Me">Remember Me</label>
                        </div>
                        <button className="button-cancel">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;