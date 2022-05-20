import { useTheme } from "contexts";
import {useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate();
    const {theme} = useTheme();
    const getStarted = () => {
        navigate("/notes")
    }

  return (
    <div className={`generic-page`}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroHeading}>Welcome to Zariya</h1>
        <h3 className={styles.heroDescription}>Zariya is a minimal, no nonsense note-taking app.</h3>
        <div className={styles.buttonContainer}>
        <button className={`mono-btn ${theme==="dark-theme"?"light-fill":"dark-fill"} gap-u30`} onClick={getStarted}>Get Started</button>
        </div>
      </div> 
    </div>
  )
}

export default Landing;