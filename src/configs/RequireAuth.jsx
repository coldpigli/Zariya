import { useUserDetails } from "contexts";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {

  const {userState} = useUserDetails();
  const {isLoggedIn} = userState;
  const location = useLocation();

  
  if(!isLoggedIn){
      return <Navigate to="/login"  state={{path: location.pathname}}/>
  }
 return children;
}

export default RequireAuth;