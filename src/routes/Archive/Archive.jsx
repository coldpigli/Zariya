import DOMPurify from "dompurify";
import { useUserDetails } from "contexts";
import styles from "./Archive.module.css";
import { deleteNote, unarchiveNote } from "utils";

const Archive = () => {
  const {userState, dispatchUser} = useUserDetails();
  const {archives} = userState;

  return (
    <div className={`generic-page`}>
      <h1 className={`gap-d30`}>Archived Notes</h1>
      <div className={`${styles.noteList} flex`}>
        {
          archives.length===0?<h1>You dont have any archived notes</h1>:null
        }
      {
        archives?.map((note)=>{
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
                <div onClick={()=>unarchiveNote(note, dispatchUser)}>
                  <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>unarchive</span>
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

export default Archive;