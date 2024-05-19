import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
