import { NoteCard } from 'components';
import { useFilter, useUserDetails } from 'contexts'
import { useEffect, useState } from 'react';
import { getFilteredNotes } from 'utils';
import styles from "./NoteListing.module.css";

const NoteListing = () => {

    const {userState} = useUserDetails();
    const {notes} = userState;
    const {filterState} = useFilter();
    const [filteredList, setFilteredList] = useState([])
    console.log("filteredList", filteredList);

    useEffect(()=>{
      const filtered = getFilteredNotes(filterState, notes);
      setFilteredList(filtered)
    }, [notes, filterState])
      
  return (
    <div className={`flex-vertical`}>
      <h3>All Notes</h3>
      <div className={`${styles.noteList} flex`}>
        {
          filteredList?.map((note)=>{
            return <div>
              <NoteCard note={note}/>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default NoteListing