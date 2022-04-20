import styles from "./NoteCard.module.css";
import DOMPurify from "dompurify";
import { useNote, useUserDetails } from "contexts";
import { archiveNote, deleteNote, toast } from "utils";

const NoteCard = ({note}) => {

  const {dispatchNote} = useNote();
  const {userState, dispatchUser} = useUserDetails();
  const {pinnedNotes} = userState;
 
  const editNoteData = () => {
      dispatchNote({type: "EDIT_NOTE", payload: note})
  }

  const pinNote = () => {
      pinnedNotes.find(item=>item._id===note._id) ? 
      toast({type: "error", message: "Note already pinned"}) : 
      dispatchUser({type: "ADD_PINNED_NOTE", payload: note})
  }

  return (
    <div className={`${styles.noteContainer} flex-vertical`} style={{backgroundColor: note.color, color: "black"}}>
        <h2 className={`${styles.noteTitle}`}>{note.title}</h2>
        <div className={`${styles.snippet}`} 
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(note.content)}}
        onClick={editNoteData}></div>
        <div className={`${styles.bottomData} flex`}>
          <div className={`${styles.dateTime}`}>
              {
                new Date(note.date).toLocaleString('en-IN',{
                  day: 'numeric',
                  year: 'numeric',
                  month: 'long',
              })
              }
          </div>
          <div className={`${styles.noteActions} flex`}>
              <div onClick={pinNote}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>push_pin</span>
              </div>
              <div onClick={()=>archiveNote(note, dispatchUser)}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>archive</span>
              </div>
              <div onClick={()=>{
                dispatchUser({type: "UPDATE_TRASH", payload: note})
                deleteNote(note, dispatchUser)}}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>delete_forever</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NoteCard