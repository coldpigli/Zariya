const userReducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            const {firstName,archives,notes} = action.payload
            return{
                ...state,
                firstName: firstName,
                isLoggedIn: true,
                archives: archives,
                notes: notes
            }            
        case "USER_LOGOUT":
           return{
                isLoggedIn: false,
                firstName: "",
                archives: [],
                notes: []
            }
        default:
           return state;
    }
}


export default userReducer