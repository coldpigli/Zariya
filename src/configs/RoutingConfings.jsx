import { Routes, Route } from "react-router-dom";
import { Archive, Focus, FolderView, Landing, Login, Notes, Signup, Trash } from "routes";
import RequireAuth from "./RequireAuth";


const RoutingConfings = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/notes" element={<RequireAuth><Notes/></RequireAuth>}/>
        <Route path="/label" element={<RequireAuth><FolderView/></RequireAuth>}/>
        <Route path="/archive" element={<RequireAuth><Archive/></RequireAuth>}/>
        <Route path="/trash" element={<RequireAuth><Trash/></RequireAuth>}/>
        <Route path="/focus" element={<RequireAuth><Focus/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default RoutingConfings