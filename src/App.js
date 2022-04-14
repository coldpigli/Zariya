import { SideNav } from "components";
import { RoutingConfings } from "configs";
import { useTheme } from "contexts";
import "./App.css";

function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme}`}>
      <SideNav/>
      <RoutingConfings/>
    </div>
  );
}

export default App;
