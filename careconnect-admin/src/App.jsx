import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Residents from "./pages/Residents";
import Society from "./pages/Society";
import Emergency from "./pages/Emergency";
import Notifications from "./pages/Notifications";
import SOS from "./pages/SOS";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/society" element={<Society />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/sos" element={<SOS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;