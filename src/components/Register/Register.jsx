import React from 'react'
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './Register.css'
import { Link } from 'react-router-dom';
export default function Register() {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const Email_REGEX = /^[a-zA-Z0-9._-]{1,99}(@)[a-zA-Z0-9]{1,99}(.)[a-zA-Z]{1,3}$/;
  const Phone_REGEX = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phoneNum, setPhoneNum] = useState('');
  const [validPhoneNum, setValidPhoneNum] = useState(false);
  const [PhoneNumFocus, setPhoneNumFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])

    useEffect(() => {
        setValidEmail(Email_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPhoneNum(Phone_REGEX.test(phoneNum));
    }, [phoneNum])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, email, phoneNum])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:9999/register`,
            {name:user,email:email,password:pwd,phone_number:phoneNum},
            {
                // headers:{'Content-Type': 'application/json'},
                // withCredentials: true
            });
            setSuccess(true);
            console.log(response.data);
        } catch(err){
            if (!err?.response){
                setErrMsg('No Server Response')
            } else if (err.response?.status === 500){
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
  return (
    <div className='Registercontainer'>
      {success ? (
        <section className='RegisterSection'>
            <h1>Success!</h1>
            <p>
                <Link to='/Login'>Sign In</Link>
            </p>
        </section>
            ) : (
                <section className='RegisterSection'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail && email ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Email is Incorrect
                        </p>

                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="phone Number">
                            PhoneNumber:
                            <FontAwesomeIcon icon={faCheck} className={validPhoneNum && phoneNum ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPhoneNum || !phoneNum ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            onChange={(e) => setPhoneNum(e.target.value)}
                            value={phoneNum}
                            required
                            aria-invalid={validPhoneNum ? "false" : "true"}
                            aria-describedby="phoneNumnote"
                            onFocus={() => setPhoneNumFocus(true)}
                            onBlur={() => setPhoneNumFocus(false)}
                        />
                        <p id="emailnote" className={PhoneNumFocus && !validPhoneNum ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Phone Number is Incorrect
                        </p>

                        <button className='btn btn-primary mt-2' disabled={!validName || !validPwd || !validEmail || !validPhoneNum ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <Link to='/Login'>Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
    </div>
  )
}
