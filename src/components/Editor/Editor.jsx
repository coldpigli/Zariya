import { useNote } from "contexts";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css"

const Editor = () => {

  const {noteState, dispatchNote} = useNote();
  const {noteData} = noteState
 
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };
  return (
    <ReactQuill
      modules={modules}
      placeholder="Enter Note..."
      value={noteData.content}
      onChange={(e)=>dispatchNote({type:"UPDATE_NOTE_CONTENT",payload: e})}
    />
  );
}

export default Editor;