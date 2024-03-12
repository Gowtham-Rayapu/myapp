import React, { useContext } from 'react'
import Home1 from './Home1'
import { UserContext } from './App13a'

export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div>Register</div>
    <button onClick={() => setFlag((prevState) => 1)}>Submit</button>
    </>
  )
}