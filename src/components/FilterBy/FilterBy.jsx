import { useTheme } from "contexts";
import styles from "./FilterBy.module.css";

const FilterBy = () => {

  const {theme} = useTheme();

  return (
    <div className={`${styles.filterContainer} ${theme==="day-theme"?"day-fill":"dark-fill"}`}>
        <div className={`${styles.byLabel} flex-vertical`}>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="thoughts"/>
          <div>Thoughts</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="work"/>
          <div>Work</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="todo"/>
          <div>Todo</div>   
        </div>
        <div className={`flex`}>
          <input type="radio" name="byLabel" value="shopping"/>
          <div>Shopping</div>   
        </div>   
        </div>
    </div>
  )
}

export default FilterBy