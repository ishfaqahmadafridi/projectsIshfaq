import React from 'react'
import "./Login.css"
import { assets } from "../../assets/frontend_assets/assets";

const Login = ({setLogin}) => {
  const [currstate,setcurrstate] = React.useState("Login")
  return (
    <div className='login'>
      <form  className='login-container'>
        <div className="login-title">
          <h2>{currstate}</h2>
          <img src={assets.cross_icon}  onClick={() => setLogin(false)} />
        </div>
        <div className="login-input">
          {currstate === "Login" ? <></> : <input type="text" placeholder='username' required />}
          <input type="text" placeholder='email' required />
          <input type="password" placeholder='password' required />
          <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        </div>
        <div className="login-condition">
                    <input type="checkbox" required />
          <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
        </div>
                        {
            currstate === 'Login' ?
            <p>Create a new account ? <span onClick={() => setcurrstate("Sign Up")}>click here</span></p> :
            <p>Already have an account ? <span onClick={() => setcurrstate("Login")}>Login here</span></p>

          }
      </form>
    </div>
  )
}

export default Login
