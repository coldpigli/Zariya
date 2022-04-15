import { useNote } from "contexts";
import styles from "./WriteNote.module.css";

const WriteNote = () => {

    const {noteState, dispatchNote} = useNote();
    const {isOpen} = noteState;

  return (
    <div className={`${styles.noteContainer} ${isOpen? styles.noteShow: styles.noteHide}`}>
        <div className={`${styles.notepad}`}>
            <div className={`${styles.close} pointer`} onClick={()=>dispatchNote({type:"TOGGLE_WRITE"})}>
                <span className={`material-icons md-24`}>close</span>
            </div>
        </div>
    </div>
  )
}

export default WriteNote;