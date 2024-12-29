// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form.jsx";
import ApiCaling from "./components/API/ApiCaling.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/api" element={<ApiCaling />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
