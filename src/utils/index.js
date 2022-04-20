import { handleLogin,validateInputs, handleSignup } from "./handleAuth";
import toast from "./toast";
import { addNote, editNote, deleteNote, archiveNote, unarchiveNote } from "./handleNote";

export {
    handleLogin,
    handleSignup,
    validateInputs,
    addNote,
    editNote,
    deleteNote,
    toast,
    archiveNote,
    unarchiveNote
}