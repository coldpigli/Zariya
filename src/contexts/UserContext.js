import { createContext, useContext, useReducer } from "react";
import { userReducer } from "reducers";

const UserContext = createContext(null);

const useUserDetails = () => useContext(UserContext);

const UserProvider = ({ children }) => {

const [userState, dispatchUser] = useReducer(userReducer, {
    isLoggedIn: false,
    firstName: "",
    archives: [],
    notes: [],
    pinnedNotes: [],
    trash: []
})

  return <UserContext.Provider value={{userState, dispatchUser}}>
            {children}
         </UserContext.Provider>
};

export { UserProvider, useUserDetails };
