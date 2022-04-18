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
        console.log(notes);
        toast({ type: "success", message: "Updated Note" });
        dispatch({type: "UPDATE_NOTES", payload: notes})
      }
    } catch (err){
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
    } 
}

export {
    addNote,
    editNote
}