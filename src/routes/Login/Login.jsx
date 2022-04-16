import { useTheme, useUserDetails } from "contexts";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import { handleLogin } from "utils";

const Login = () => {

  const {theme} = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const {dispatchUser} = useUserDetails();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const testCredentials = {
    email: "piyushtest@gmail.com",
    password: "adarshBalika123"
  }

  const loginGuest = () => {
    setLoginData(testCredentials);
  }

  const loginHandler = async (e) => {
      e.preventDefault();
      const payload = await handleLogin(loginData)
      if(payload){
        dispatchUser({type: "USER_LOGIN", payload: payload})
         navigate(redirectPath, {replace: true})
      }    
  }

  return (
    <div className={`generic-page ${styles.loginPage} flex-vertical gap-u30`}>
        <div className={`${styles.headerSection} gap-d30`}>
            <h1 className={`heading-large`}>Welcome Back,</h1>
            <div className={`heading3`}>Sign in to continue...</div>
        </div>
        <form className={`${styles.loginForm} flex-vertical`}>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Email</span>
                <input 
                className={`${styles.inputBox}`} 
                placeholder="Enter you email"
                value={loginData.email} 
                type="email"
                autoComplete="on"
                onChange={(e)=>setLoginData({...loginData, email: e.target.value})}
                required/>
            </div>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Password</span>
                <input 
                className={`${styles.inputBox}`} 
                placeholder="Enter Password" 
                type="password"
                value={loginData.password}
                onChange={(e)=>setLoginData({...loginData, password: e.target.value})}
                />
            </div>
            <div className={`pointer`} onClick={loginGuest}>Login with Guest Credentials?</div>
            <div className={`${styles.loginCta} gap-u30 flex-vertical`}>
              <button className={`mono-btn ${styles.loginBtn} ${theme==="day-theme"?"dark-fill":"day-fill"} gap-d20`} onClick={loginHandler}>Login</button>
              <button className={`mono-btn ${styles.loginBtn} ${theme==="day-theme"?"dark-fill outline-btn-day":"day-fill outline-btn-dark"}`} onClick={()=>navigate("/signup")}>New User? Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Login