import { useNote } from "contexts";
import styles from "./NotesToolbar.module.css";

const NotesToolbar = () => {

    const {dispatchNote} = useNote();
    
  return (
    <div className={`${styles.toolbar} flex gap-d30`}>
          <h2>All Notes</h2>
          <div className={`flex ${styles.ctaSection}`}>
            <div className={`${styles.toolbarCta} children-centered pointer`} onClick={()=>dispatchNote({type:"NEW_NOTE"})}>
              <span className="material-icons md-24">add</span>
              <span className={`${styles.ctaText}`}>Add new</span>
            </div>
            <div className={`${styles.toolbarCta} children-centered pointer`}>
              <span className="material-icons md-24">sort</span>
              <span className={`${styles.ctaText}`}>Sort</span>
            </div>
            <div className={`${styles.toolbarCta} children-centered pointer`}>
              <span className="material-icons md-24">filter_alt</span>
              <span className={`${styles.ctaText}`}>Filter</span>
            </div>
          </div> 
      </div>
  )
}

export default NotesToolbar;