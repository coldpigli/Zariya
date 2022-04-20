import { ColorPallete, Editor, LabelPallete, PriorityPallete } from "components";
import { useNote, useUserDetails } from "contexts";
import styles from "./WriteNote.module.css";
import 'tippy.js/animations/scale-subtle.css';
import Tippy from '@tippyjs/react';
import { addNote, deleteNote, editNote } from "utils";

const WriteNote = () => {

    const {noteState, dispatchNote} = useNote();
    const {isOpen, isEdit, noteData} = noteState;
    const {userState, dispatchUser} = useUserDetails();
  
    const handleNote = () => {
        isEdit ? editNote(noteData,dispatchUser):addNote(noteData, dispatchUser);
        dispatchNote({type: "CLOSE_EDITOR"})
    }

  return (
    <div className={`${styles.noteContainer} ${isOpen? styles.noteShow: styles.noteHide}`}>
        <div className={`${styles.notepad}`} style={{backgroundColor: noteData.color}}>
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
            <div className={`${styles.bottomToolbar}`} style={{backgroundColor: noteData.color}}>
              <Tippy content={<ColorPallete/>} interactive={true} arrow={true} animation="scale-subtle">
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>palette</span>
              </Tippy>
              <Tippy content={<LabelPallete/>} interactive={true} arrow={true} animation="scale-subtle">
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>label</span>
              </Tippy>
              <Tippy content={<PriorityPallete/>} interactive={true} arrow={true} animation="scale-subtle">
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>report</span>
              </Tippy>
              <div>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>delete_forever</span>
              </div>
              <div onClick={handleNote}>
                <span className={`material-icons md-24 ${styles.bottomCta} pointer`}>check</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WriteNote;