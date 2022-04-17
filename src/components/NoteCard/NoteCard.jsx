import styles from "./NoteCard.module.css";
import DOMPurify from "dompurify";

const NoteCard = ({note}) => {
  return (
    <div className={`${styles.noteContainer} flex-vertical`} style={{backgroundColor: note.color, color: "black"}}>
        <h2 className={`${styles.noteTitle}`}>{note.title}</h2>
        <div className={`${styles.snippet}`} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(note.content)}}></div>
    </div>
  )
}

export default NoteCard