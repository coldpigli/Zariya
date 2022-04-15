import { useTheme, useUserDetails } from "contexts";
import { Link } from "react-router-dom";
import { toast } from "utils";
import styles from "./TopNav.module.css";

const TopNav = () => {
  
    const {theme, setTheme} = useTheme();
    const {userState, dispatchUser} = useUserDetails();
    const {isLoggedIn} = userState;
    const changeTheme = () => {
          (theme==="dark-theme")?setTheme("day-theme"):setTheme("dark-theme");
    }

    const handleLogout = () => {
      dispatchUser({type:"USER_LOGOUT"});
      toast({type:"success",message:"Logged Out"})
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
        {
          isLoggedIn ?
          <div onClick={handleLogout} className={`flex children-centered ${theme}`}>
            <span className="material-icons md-24">logout</span>
          </div> :
        <Link to="/login" className={`${theme}`}>Login</Link>
        }
      </div>
    </div>
  );
};

export default TopNav;