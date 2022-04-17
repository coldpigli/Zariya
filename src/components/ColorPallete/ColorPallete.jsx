import { palleteColors } from "constants";
import { useNote } from "contexts";
import styles from "./ColorPallete.module.css";

const ColorPallete = () => {
  const { dispatchNote } = useNote();
  const changeNoteColor = (color) => {
    dispatchNote({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <div className={`${styles.palleteContainer}`}>
      {palleteColors.map((item) => {
        return (
          <div
            className={`${styles.roundColor}`}
            style={{ backgroundColor: item.color }}
            onClick={() => changeNoteColor(item.color)}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorPallete;
