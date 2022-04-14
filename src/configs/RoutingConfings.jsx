import { Routes, Route } from "react-router-dom";
import { Archive, Focus, FolderView, Login, Notes, Signup, Trash } from "routes";

const RoutingConfings = () => {
  return (
    <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="/label" element={<FolderView/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/focus" element={<Focus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default RoutingConfings