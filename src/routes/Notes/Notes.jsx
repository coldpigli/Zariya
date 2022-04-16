import styles from "./Notes.module.css";
import { NotesToolbar, WriteNote } from "components";

const Notes = () => {
  return (
    <div className={`generic-page ${styles.notePage}`}>
      <NotesToolbar/>
      <WriteNote />
    </div>
  )
}

export default Notes