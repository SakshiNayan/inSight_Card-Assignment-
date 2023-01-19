import React from 'react'
import { useState, useContext } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import UserContext from '../../../Context/UserContext'

function LoginPg() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
})
const { userLogin } = useContext(UserContext);
const handleLogin =(e)=>{
    e.preventDefault();
    if(!login.email || !login.password){
        window.alert("Please provide all the required fields");
        return;
    }
    else{
        userLogin(login);
    }
}
  return (
    <div id='App'>
        <div id='pg-area'>
            <div className='image-area'><img src="./images/Google-Analytics-B2B-Marketing-Reports.jpg" alt="diagram"  className='front-img'/></div>
            <div className='login-form-side'>
                <div className='not-reg'>
                    <span className='text1'>Not Registered Yet?</span><span className='text2'><Link to="/register">Register Now</Link></span>
                    </div>
                <div className='login-area'>
                    <h1>Hello Again!</h1>
                    <h6>Welcome to Analytics Here..</h6>
                    <form onSubmit={handleLogin} className="form-login">
                      <div className='field'>
                          <input className='input' type="text" required={true} onChange={(e) => { setLogin({ ...login, email: e.target.value }) }}  placeholder='User Email'/>
                          <div className='signin-blueline' ></div>
                      </div>
                      <div className='field'>
                          <input type="password" className='input' required={true}  placeholder='Password' onChange={(e) => { setLogin({ ...login, password: e.target.value }) }}/>
                          <img src="./images/eye-slash.svg" alt="" className='eye-lash' />
                          <div className='signin-blueline' ></div>
                      </div>
                      <div className='field'>
                          <Link to='/body'><button type="submit" className='logBtn'>Sign In</button></Link>
                      </div>
                      <div className='other-line'><div className='line'></div><div><h3>OR</h3></div><div className='line'></div></div>
                      <div id='logo-icon'>
                        <div><img src="./images/google.svg" alt="" /></div>
                        <div><img src="./images/facebook.svg" alt="" /></div>
                        <div><img src="./images/linkedin.svg" alt="" /></div>
                      </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPg