import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";

const RootComponent = () => {
  const [status, setStatus] = useState("intro");

  return (
    <AppContext.Provider value={{ status, setStatus }}>
      <App />
    </AppContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
