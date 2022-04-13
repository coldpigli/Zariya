import { useTheme } from "contexts";
import "./App.css";

function App() {
  const {theme} = useTheme();
  return (
    <div className={`App ${theme}`}>
      <h1>We make it happen</h1>
    </div>
  );
}

export default App;
