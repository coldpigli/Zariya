import { useTheme } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TopNav.module.css";

const TopNav = () => {
  
    const {theme, setTheme} = useTheme();
    const changeTheme = () => {
          (theme==="dark-theme")?setTheme("day-theme"):setTheme("dark-theme");
    }
  
  return (
    <div className={`${styles.topnav} ${theme} flex`}>
      <div className={`${styles.logoContainer} flex`}>
        <Link to="/" className={`txt-bold heading2 ${theme}`}>Zariya</Link>
      </div>
      <div className={`${styles.cta} flex children-centered`}>
        <div className={`flex children-centered ${theme}`} onClick={changeTheme}>
          <span className="material-icons md-24">dark_mode</span>
        </div>
        <Link to="/login" className={`flex children-centered ${theme}`}>
          <span className="material-icons md-24">logout</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;