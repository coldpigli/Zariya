import { NoteCard } from "components";
import { useUserDetails } from "contexts";
import styles from "./PinnedNotes.module.css";

const PinnedNotes = () => {

  const {userState} = useUserDetails();
  const {pinnedNotes} = userState;
  
  return (
   <div className={`flex-vertical gap-d30`}>
        <h3 className={`gap-d30`}>Pinned Notes</h3>
        <div className={`${styles.pinnedNotes} flex`}>
        {
          pinnedNotes.map((item)=><NoteCard note={item}/>)
        }
        </div>
  </div>
  )
}

export default PinnedNotes