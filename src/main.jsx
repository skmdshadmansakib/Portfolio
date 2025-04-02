import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";  // ✅ Use HashRouter
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router> 
    <App />
  </Router>
);