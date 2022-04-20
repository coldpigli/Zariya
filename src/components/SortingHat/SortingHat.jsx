import style from "./SortingHat.module.css";

const SortingHat = () => {
  return (
    <div className={`${style.sortingHat}`}>
        <div className={`${style.sortContainer}`}>
            <h3>By Date</h3>
            <div className={`flex children-centered`}>
                <input type="radio" name="byDate" value="newestFirst"/>
                <div>Newest First</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="byDate" value="oldestFirst"/>
                <div>Oldest First</div>
            </div>
        </div>
        <div className={`${style.sortContainer}`}>
            <h3>By Priority</h3>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="high"/>
                <div>High</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="medium"/>
                <div>Medium</div>
            </div>
            <div className={`flex children-centered`}>
                <input type="radio" name="priority" value="low"/>
                <div>Low</div>
            </div>
        </div>
        <div>
            <button>Reset All</button>
        </div>
    </div>
  )
}

export default SortingHat