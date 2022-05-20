import styles from "./Notes.module.css";
import { NoteListing, NotesToolbar, WriteNote } from "components";

const Notes = () => {
  return (
    <div className={`generic-page ${styles.notePage}`}>
      <NotesToolbar/>
      <WriteNote />
      <NoteListing/>
    </div>
  )
}

export default Notes