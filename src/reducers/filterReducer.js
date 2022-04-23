const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_DATE":
            return {...state, sortByDate: action.payload}
        case "SORT_BY_PRIORITY":
            return {...state, sortByPriority: action.payload}
        case "FILTER_BY_LABEL":
            return {...state, filterByLabel: action.payload}
        case "CLEAR":
            return{
                sortByDate: false,
                sortByPriority: false,
                filterByLabel: false
            }
        default:
            break;
    }
}

export default filterReducer;