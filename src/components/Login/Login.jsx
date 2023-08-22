import React from 'react';
import { useRef,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartState } from '../../Context/Context';
import './Login.css'
import Cookie from 'js-cookie';

export default function Login() {
  const {setAuth,loggedIn,setLoggedIn} = CartState();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const setCookie = (cookieName, userAuth)=>{
    Cookie.set(cookieName,userAuth,{
      expires:1, // 1day
      secure:true,
      sameSite:'strict',
      path:'/'
    })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const response = await axios.post(`http://localhost:9999/login`,
         {email:email, password:pwd});
         setLoggedIn(true);
         const accessToken = response?.data?.token;
         setCookie('userAuth', JSON.stringify(response.data));
         console.log(response.data);
         setAuth({email,pwd, accessToken});
         setEmail("");
         setPwd('');
         
    } catch(err) {
       if (err.response?.status === 400){
                setErrMsg('Invalid Email or Passwrod')
            }
            errRef.current.focus();
    }
  }
  
  return (
    <div className='loginContainer'>
      {loggedIn ? (
          <section className='loginSection'>
            <h1>You are Logged In</h1>
            <br/>
            <p>
              <Link to='/'>Start Shopping</Link>
            </p>
          </section>):
        (<section className='loginSection'>
          <p ref={errRef} className={errMsg? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id='email'
                ref={userRef}
                autoComplete='off'
                onChange={(e)=> setEmail(e.target.value)}
                value={email} // crucial if you want to clear the input after supmission
                required
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id='password'
                onChange={(e)=> setPwd(e.target.value)}
                value={pwd} // crucial if you want to clear the input after supmission
                required
            />
            <button className="btn btn-primary mt-2">Sign In</button>
            <p>
              Need an Account?<br />
              <span className="line">
                <Link to='/Register'>Sign Up</Link>
              </span>
            </p>
          </form>
        </section>
      )}
    </div>
  )
}
