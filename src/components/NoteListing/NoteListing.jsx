import { NoteCard } from 'components';
import { useUserDetails } from 'contexts'
import styles from "./NoteListing.module.css";

const NoteListing = () => {

    const {userState} = useUserDetails();
    const {notes} = userState

  return (
    <div className={`${styles.noteList} flex`}>
        {
          notes.map((note)=>{
            return <div>
              <NoteCard note={note}/>
            </div>
          })
        }
    </div>
  )
}

export default NoteListing