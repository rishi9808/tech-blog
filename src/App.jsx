import { useState } from "react";
import "./App.css";
import { HomePage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
      </Routes>
    </>
  );
}

export default App;
