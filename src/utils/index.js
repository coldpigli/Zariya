import { handleLogin,validateInputs, handleSignup } from "./handleAuth";
import toast from "./toast";
import { addNote, editNote, deleteNote, archiveNote, unarchiveNote } from "./handleNote";
import { sortByDate, sortByPriority, filterByLabel, getFilteredNotes  } from "./filterUtils";

export {
    handleLogin,
    handleSignup,
    validateInputs,
    addNote,
    editNote,
    deleteNote,
    toast,
    archiveNote,
    unarchiveNote,
    sortByDate,
    sortByPriority,
    filterByLabel,
    getFilteredNotes
}