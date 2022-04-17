import { labelOptions } from "constants";
import { useNote } from "contexts";
import styles from "./LabelPallete.module.css";

const LabelPallete = () => {
    const {dispatchNote} = useNote();
  return (
    <div className={`${styles.palleteContainer}`}>
      {labelOptions.map((label) => {
        return (
          <div className={`${styles.labelOption}`}>
            <span>{label.value}</span>
            <input type="radio" name="label" value={label.value} onChange={(e)=>dispatchNote({type: "UPDATE_NOTE",payload: e.target})}/>
          </div>
        );
      })}
    </div>
  );
};

export default LabelPallete;
