import React, { useContext } from 'react'
import { UserContext } from './App13a'
import Home1 from './Home1';
import Register from './Register';


export default function Login1() {
    const {flag, setFlag}=useContext(UserContext);
if (flag == 1) {
    <Home1/>
} else if (flag == 2) {
    <Register/>
} 
  return (
    <>
    <div>Login1</div>
    <button onClick={()=>setFlag((prev)=>1)}>Login</button>
    <button onClick={()=>setFlag((prev)=>2)}>Create Account</button>
    {console.log(flag)}
    {/* {flag && (<Home1/>)} */}
    </> 
  )
}