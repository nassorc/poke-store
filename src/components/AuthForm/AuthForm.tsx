import React, { useState } from 'react';
import { loginUser, loginActions, useAuthDispatch, useAuthState } from "../../Context/AuthContext"
import { actionType } from '../../Context/AuthContext/types';
import FieldComponent from './FieldComponent';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const user = useAuthState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    
    if(!email || !password) setErrorMsg("Please enter an email and password");

    const payload = {
      email,
      password
    }
    const data = await loginUser(dispatch as React.Dispatch<actionType>, loginActions, payload);

    if(data) {
      navigate("/");
    }
    setErrorMsg(data);
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if(!email || !password) setErrorMsg("Please enter an email and password");

    const res = await fetch("http://localhost:3002/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    })
    const data = await res.json();
  }

  return (
    <div className='max-w-xl mx-auto mt-10'>
        <form className='p-6 [&>*]:mt-10' onSubmit={handleLogin}>
          <FieldComponent label='Email' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" autoFocus/>
          <FieldComponent label='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder='Password' />
          <input 
            type="submit" 
            value="Login"
            className='
                py-2
              bg-red-400
                w-full
                rounded-lg
                hover:bg-red-700
                text-slate-100
                transition-all
            '
          />
          <button className='
              py-2
            bg-red-400
              w-full
              rounded-lg
              hover:bg-red-700
              text-slate-100
              transition-all
            '
            onClick={handleRegister}
          >Create an account</button>
        </form> 
    </div>

  )
}