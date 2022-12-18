 import { useState } from 'react';
import React from 'react';
import axios from 'axios';

function Register() 
{
    const [Name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail]=  useState('')
    const [password, setPassword] = useState('')

    const handleName= (event) => {
        setName(event.target.value)
      }
      
      const handleMobile= (event) => {
        setMobile(event.target.value)
      }

      const handleEmail= (event) => {
        setEmail(event.target.value)
      }
      
      const handlePassword= (event) => {
        setPassword(event.target.value)
      }
      const handleApi =()=>{
        // console.log({Name,mobile,email,password})
        axios.post('https://reqres.in/api/login', {
            Name : Name,
            mobile : mobile,
            email : email,
            password : password
          })
          .then(result=>{
            console.log(result.data)
            alert('success done')
          })
          .catch(error=> {
            console.log(error)
            alert('server error')
          })
         }

    return (
        <div className="App">
        <h1>SIGN UP PAGE</h1>
       
     <label>Name:<input type="text" value={Name} onChange={handleName}/></label>
    Mobile:<input type="text"  value={mobile} onChange={handleMobile}/>
    Email:<input type="text" value={email} onChange={handleEmail}/>
    Password:<input type="password" value={password} onChange={handlePassword}/>
    <input type="button" onClick={handleApi} value="Sign Up" />
  
        </div>
    );
}
export default Register