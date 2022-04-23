import { useFilter, useTheme } from "contexts";
import styles from "./FilterBy.module.css";

const FilterBy = () => {

  const {theme} = useTheme();
  const {filterState, dispatchFilter} = useFilter();

  return (
    <div className={`${styles.filterContainer} ${theme==="day-theme"?"day-fill":"dark-fill"}`}>
        <div className={`${styles.byLabel} flex-vertical`}>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="thoughts" onChange={(e)=>dispatchFilter({type:"FILTER_BY_LABEL", payload: e.target.value})} checked={filterState.filterByLabel==="thoughts"?true:false}/>
          <div>Thoughts</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="work" onChange={(e)=>dispatchFilter({type:"FILTER_BY_LABEL", payload: e.target.value})} checked={filterState.filterByLabel==="work"?true:false}/>
          <div>Work</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="todo" onChange={(e)=>dispatchFilter({type:"FILTER_BY_LABEL", payload: e.target.value})} checked={filterState.filterByLabel==="todo"?true:false}/>
          <div>Todo</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="shopping" onChange={(e)=>dispatchFilter({type:"FILTER_BY_LABEL", payload: e.target.value})} checked={filterState.filterByLabel==="shopping"?true:false}/>
          <div>Shopping</div>   
        </div>  
        <button onClick={()=>dispatchFilter({type: "CLEAR"})}>Reset All</button> 
        </div>
    </div>
  )
}

export default FilterBy