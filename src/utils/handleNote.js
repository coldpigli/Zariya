import axios from "axios";
import toast from "./toast";

const addNote = async (noteData, dispatch) => {
    try{
    const res = await axios.post("/api/notes", {note: noteData}, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        toast({ type: "success", message: "Note Successfuly Added" });
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    }  
}

const editNote = async (noteData, dispatch) => {
  try{
    const res = await axios.post(`/api/notes/${noteData._id}`, {note: noteData}, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        toast({ type: "success", message: "Updated Note" });
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    } 
}

const deleteNote = async(noteData, dispatch) => {
  try{
    const res = await axios.delete(`/api/notes/${noteData._id}`,{
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes } = res.data;
        console.log("Caling from delet",res.data)
        toast({ type: "success", message: "Deleted Note" });
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    } 
}

const archiveNote = async(noteData, dispatch) => {
  try{
    const res = await axios.post(`/api/notes/archives/${noteData._id}`,{note: noteData},{
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes, archives } = res.data;
        toast({ type: "success", message: "Note Archived" });
        dispatch({type: "UPDATE_ARCHIVE", payload: archives})
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    } 
}

const unarchiveNote = async(noteData, dispatch) => {
  console.log("I have a good boy", noteData)
  try{
    const res = await axios.post(`/api/archives/restore/${noteData._id}`, {}, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      if (res.status === 200 || res.status === 201) {
        const { notes, archives } = res.data;
        toast({ type: "success", message: "Note Unarchived" });
        dispatch({type: "UPDATE_ARCHIVE", payload: archives})
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    } 
}

export {
    addNote,
    editNote,
    deleteNote,
    archiveNote,
    unarchiveNote
}