import logo from "./logo.svg";
import "./App.css";
import { MyApp } from "./MyApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
