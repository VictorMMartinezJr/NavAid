import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavigationProvider } from "./context/NavigationContext.jsx";

createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
