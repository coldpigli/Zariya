import styles from "./Notes.module.css";
import { NoteListing, NotesToolbar, PinnedNotes, WriteNote } from "components";
import { useUserDetails } from "contexts";

const Notes = () => {
  const {userState} = useUserDetails();
  const {pinnedNotes} = userState;
  return (
    <div className={`generic-page ${styles.notePage}`}>
      <NotesToolbar/>
      <WriteNote />
      <NoteListing/>
    </div>
  )
}

export default Notes