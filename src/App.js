import React, { useState } from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <MainNav setIsOpen={setIsOpen} />
      <SubNav setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
