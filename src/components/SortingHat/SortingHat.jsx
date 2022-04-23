import { useFilter } from "contexts";
import style from "./SortingHat.module.css";

const SortingHat = () => {
    const {filterState, dispatchFilter} = useFilter();
    console.log(filterState)
  return (
    <div className={`${style.sortingHat}`}>
        <div className={`${style.sortContainer}`}>
            <h3>By Date</h3>
            <div className={`flex children-centered`}>
                <input 
                type="radio" 
                name="byDate" 
                value="newestFirst" 
                checked={(filterState.sortByDate==="newestFirst")?true:false}
                onChange={(e)=>dispatchFilter({type:"SORT_BY_DATE", payload: e.target.value})}/>
                <div>Newest First</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="byDate" value="oldestFirst" onChange={(e)=>dispatchFilter({type:"SORT_BY_DATE", payload: e.target.value})}
                checked={(filterState.sortByDate==="oldestFirst")?true:false}/>
                <div>Oldest First</div>
            </div>
        </div>
        <div className={`${style.sortContainer}`}>
            <h3>By Priority</h3>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="high" onChange={(e)=>dispatchFilter({type:"SORT_BY_PRIORITY", payload: e.target.value})}
                checked={(filterState.sortByPriority==="high")?true:false}/>
                <div>High</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="medium" onChange={(e)=>dispatchFilter({type:"SORT_BY_PRIORITY", payload: e.target.value})}
                checked={(filterState.sortByPriority==="medium")?true:false}/>
                <div>Medium</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="low" onChange={(e)=>dispatchFilter({type:"SORT_BY_PRIORITY", payload: e.target.value})}
                checked={(filterState.sortByPriority==="low")?true:false}/>
                <div>Low</div>
            </div>
        </div>
        <div onClick={()=>dispatchFilter({type: "CLEAR"})}>
            <button>Reset All</button>
        </div>
    </div>
  )
}

export default SortingHat