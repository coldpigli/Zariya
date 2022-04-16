import { Editor } from "components";
import { useNote } from "contexts";
import styles from "./WriteNote.module.css";

const WriteNote = () => {

    const {noteState, dispatchNote} = useNote();
    const {isOpen, noteData} = noteState;

  return (
    <div className={`${styles.noteContainer} ${isOpen? styles.noteShow: styles.noteHide}`}>
        <div className={`${styles.notepad} bod1`}>
            <div className={`${styles.close} pointer`} onClick={()=>dispatchNote({type:"CLOSE_EDITOR"})}>
                <span className={`material-icons md-24`}>close</span>
            </div>
            <div className={`${styles.noteTitleWrapper}`}> 
              <input 
              className={`${styles.noteTitle}`} 
              placeholder="Enter Title" 
              value={noteData.title} 
              name="title"
              onChange={(e)=>dispatchNote({type:"UPDATE_NOTE",payload:e.target})}/>
            </div>
            <div>
              <Editor/>
            </div>
            <div className={`${styles.bottomToolbar}`}>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>palette</span>
              </div>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>label</span>
              </div>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>report</span>
              </div>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>delete_forever</span>
              </div>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>check</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WriteNote;