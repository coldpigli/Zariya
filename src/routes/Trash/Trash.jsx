import { useUserDetails } from "contexts";
import DOMPurify from "dompurify";
import { addNote } from "utils";
import styles from "./Trash.module.css";

const Trash = () => {

  const {userState, dispatchUser} = useUserDetails();
  const {trash} = userState;

  const deleteForever = (note) => {
    const newTrash = trash.filter((item)=>note._id!==item._id);
    dispatchUser({type: "DELETE_FOREVER", payload: newTrash})
  }

  const restoreFromTrash = (note) => {
    const newTrash = trash.filter((item)=>note._id!==item._id);
    addNote(note, dispatchUser);
    dispatchUser({type: "DELETE_FOREVER", payload: newTrash})
  }

  return (
    <div className={`generic-page`}>
    <h1 className={`gap-d30`}>Trash</h1>
    <div className={`${styles.noteList} flex`}>
      {
        trash.length===0?<h1>Trash is empty</h1>:null
      }
    {
      trash?.map((note)=>{
        return <div className={`${styles.noteContainer} flex-vertical`} style={{backgroundColor: note.color, color: "black"}}>
        <h2 className={`${styles.noteTitle}`}>{note.title}</h2>
        <div className={`${styles.snippet}`} 
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(note.content)}}></div>
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
          <div className={`${styles.cta} flex`}>
              <div onClick={()=>restoreFromTrash(note)}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>restore_from_trash</span>
              </div>
              <div onClick={()=>deleteForever(note)}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>delete_forever</span>
              </div>
          </div>
        </div>
    </div>
      })
    }
    </div>
  </div>
  )
}

export default Trash