import { SideNav, TopNav } from "components";
import { RoutingConfings } from "configs";
import { useTheme } from "contexts";
import { ToastContainer} from 'react-toastify';
import "./App.css";

function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme}`}>
      <TopNav/>
      <SideNav/>
      <RoutingConfings/>
      <ToastContainer />
    </div>
  );
}

export default App;
