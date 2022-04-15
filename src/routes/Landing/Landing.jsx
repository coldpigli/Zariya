import { useTheme } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate();
    const {theme} = useTheme();
    const getStarted = () => {
        navigate("/notes")
    }

  return (
    <div className={`generic-page`}>
        <h1 className={`heading1`}>Zariya</h1>
        <button className={`mono-btn ${theme==="dark-theme"?"light-fill":"dark-fill"}`} onClick={getStarted}>Get Started</button>
    </div>
  )
}

export default Landing;