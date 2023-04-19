import React, { useState } from 'react'
import { useAuth } from '../../component/Auth/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [user,setUser]=useState();
    const auth=useAuth();
const location=useLocation()
    const redirectPath =location.state?.path || '/';
const navigate=useNavigate();
const handleLogin =()=>{
auth.login(user);
navigate(redirectPath,{replace:true})
}
    return (<div>
        <label>UserName:{' '}</label>
        <input type='text' onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
        
    )
}

export default Login
