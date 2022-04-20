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
                notes: [],
                pinnedNotes: [],
                trash: []
            }
        case "UPDATE_NOTES":
            return{
                ...state,
                notes: action.payload
            }
        case "UPDATE_TRASH":
            return{
                ...state,
                trash: [...state.trash, action.payload]
            }
        case "DELETE_FOREVER":
            return{
                ...state,
                trash: action.payload
            }
        case "UPDATE_ARCHIVE":
            return{
                ...state,
                archives: action.payload
            }
        case "ADD_PINNED_NOTE":
            return{
                ...state,
                pinnedNotes: [...state.pinnedNotes, action.payload],
                notes: state.notes.filter((item)=>item._id!==action.payload._id)
            }
        default:
           return state;
    }
}


export default userReducer