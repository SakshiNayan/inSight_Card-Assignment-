import React from 'react'
import { useState , useContext } from 'react'
import './register.css'
import UserContext from '../../../Context/UserContext';
import { Link } from 'react-router-dom';

function RegisterPg() {
    const [data, setData] = useState({
        username: "",
        email :"",
        password :""
    })
    const { userRegister } = useContext(UserContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        if(!data.username || !data.password || !data.email){
            window.alert("Please provide All details !");
            return;
        }
        else{
            userRegister(data);
        }
    }
  return (
    <>
    
        <img src="./images/analyzing-data.jpg" alt="" className='cover-img'/>
        <div className='reg-card'>
            <img src="./images/people-fill.svg" alt="logo" className='avatar' />
            <h1>REGISTER...</h1>
            <form onSubmit={handleRegister}  className="form-reg">
                <div className='field'>
                    <input type="text" required={true} placeholder='User Name'  onChange={(e)=>{setData({...data, username: e.target.value})}}/>
                </div>
                <div className='field'>
                    <input type="text" required={true} placeholder='Email'  onChange={(e)=>{setData({...data, email: e.target.value})}}/>
                </div>
                <div className='field'>
                    <input type="password" required={true}  placeholder='Password' onChange={(e)=>{setData({...data, password: e.target.value})}}/>
                </div >
                <div className='field'>
                    <button type="submit" className='regBtn'>Register</button>
                </div>
                <Link to='/login' className='linksource'>Member LogIn?</Link>

            </form>

        </div>

    </>
  )
}

export default RegisterPg