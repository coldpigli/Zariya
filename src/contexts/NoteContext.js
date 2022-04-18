import { useContext, createContext, useReducer } from "react";
import { noteReducer } from "reducers";

const NoteContext = createContext();

const useNote = () => useContext(NoteContext);

const NoteProvider = ({children}) => {

    const [noteState, dispatchNote] = useReducer(noteReducer, {
        isOpen: false,
        isEdit: false,
        noteData: {
            title: "",
            content: "",
            color: "",
            label: "",
            priority: ""
        }
    })

    return <NoteContext.Provider value={{noteState, dispatchNote}}>
        {children}
    </NoteContext.Provider>
}

export {
    useNote, 
    NoteProvider
}

