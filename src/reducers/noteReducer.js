const noteReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_WRITE":
            return {...state, isOpen: !state.isOpen}
        default:
            return state;
    }
}

export default noteReducer;