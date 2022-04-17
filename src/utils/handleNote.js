import axios from "axios";
import toast from "./toast";

const addNote = async (noteData, dispatch) => {
    console.log("addNote called")
    try{
    const res = await axios.post("/api/notes", {note: noteData}, {
        headers: {
          authorization: localStorage.getItem("authToken"),
        },
      });
      console.log(res);
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

export {
    addNote
}