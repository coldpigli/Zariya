import { useTheme, useUserDetails } from "contexts";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleSignup } from "utils";
import styles from "./Signup.module.css";

const Signup = () => {

  const {theme} = useTheme();
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const {dispatchUser} = useUserDetails();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })


  const matchPasswords = (e) => {
    if (e.target.value !== signupData.password) {
      setErrorMsg("Passwords don't match");
    } else {
      setErrorMsg("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const singupHandler = async(e) => {
    e.preventDefault();
    const payload = await handleSignup(signupData)
    if(payload){
      dispatchUser({type: "USER_LOGIN", payload: payload})
       navigate(redirectPath, {replace: true})
    } 
  }

  return (
    <div className={`generic-page ${styles.signupPage} flex-vertical gap-u30`}>
      <div className={`${styles.headerSection} gap-d30`}>
            <h1 className={`heading-large`}>Welcome User,</h1>
            <div className={`heading3`}>Sign up to continue...</div>
        </div>
        <form className={`${styles.signupForm} flex-vertical`}>
        <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>First Name</span>
                <input 
                className={`${styles.inputBox}`} 
                name="firstName"
                placeholder="Fist name"
                value={signupData.firstName} 
                type="text"
                autoComplete="on"
                onChange={(e)=>handleChange(e)}
                required/>
            </div>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Last Name</span>
                <input 
                className={`${styles.inputBox}`}
                name="lastName" 
                placeholder="Last name"
                value={signupData.lastName} 
                type="text"
                autoComplete="on"
                onChange={(e)=>handleChange(e)}
                required/>
            </div>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Email</span>
                <input 
                className={`${styles.inputBox}`} 
                name="email"
                placeholder="Enter you email"
                value={signupData.email} 
                type="email"
                autoComplete="on"
                onChange={(e)=>handleChange(e)}
                required/>
            </div>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Password</span>
                <input 
                className={`${styles.inputBox}`} 
                name="password"
                placeholder="Enter Password" 
                type="password"
                value={signupData.password}
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className={`${styles.inputContainer} flex-vertical gap-d30`}>
                <span className={`gap-d10`}>Re-enter Password</span>
                <input 
                className={`${styles.inputBox}`} 
                placeholder="Re-enter Password" 
                type="password"
                value={confirmPass}
                onChange={(e) => {
                  matchPasswords(e);
                  setConfirmPass(e.target.value);
                }}
                />
            </div>
            {errorMsg && <p className={`tx-label error-msg`}> {errorMsg}</p>}
            <div className={`${styles.loginCta} gap-u30 flex-vertical`}>
              <button className={`mono-btn ${styles.loginBtn} ${theme==="day-theme"?"dark-fill":"day-fill"} gap-d20`} onClick={(e) => singupHandler(e)}>Signup</button>
              <button className={`mono-btn ${styles.loginBtn} ${theme==="day-theme"?"dark-fill outline-btn-day":"day-fill outline-btn-dark"}`} onClick={()=>navigate("/login")}>Already a user? Login</button>
            </div>
        </form>
    </div>
  )
}

export default Signup