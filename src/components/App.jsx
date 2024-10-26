import { useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

function App() {
  return (
    <div className="app">
      <Searchbar/>
      <Navbar />
    </div>
  );
}

export default App;
