import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "reducers";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [filterState, dispatchFilter] = useReducer(filterReducer, {
        sortByDate: false,
        sortByPriority: false,
        filterByLabel: false
    })

    return <FilterContext.Provider value={{filterState, dispatchFilter}}>
        {children}
    </FilterContext.Provider>
}

export {
    useFilter, FilterProvider
}