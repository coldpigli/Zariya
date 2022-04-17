import { priorityOptions } from "constants";
import { useNote } from "contexts";
import styles from "./PriorityPallete.module.css";

const PriorityPallete = () => {
    const {dispatchNote} = useNote();
  return (
    <div className={`${styles.palleteContainer}`}>
      {priorityOptions.map((priority) => {
        return (
          <div className={`${styles.labelOption}`}>
            <span>{priority.value}</span>
            <input type="radio" name="priority" value={priority.value} onChange={(e)=>dispatchNote({type: "UPDATE_NOTE",payload: e.target})}/>
          </div>
        );
      })}
    </div>
  );
};

export default PriorityPallete;
