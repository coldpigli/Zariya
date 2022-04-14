import { Routes, Route } from "react-router-dom";
import { Archive, Focus, FolderView, Notes, Trash } from "routes";

const RoutingConfings = () => {
  return (
    <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="/folders" element={<FolderView/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/focus" element={<Focus/>}/>
    </Routes>
  )
}

export default RoutingConfings