import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import PublicView from "./components/PublicView";
// import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="navbar bg-body-tertiary d-flex">
          <ul className="nav align-items-start">
            <li className="nav-item">
              <Link to="/">Ver Eventos</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin">Panel de Administración</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Ruta para la vista pública donde se pueden filtrar eventos por mes */}
          <Route path="/" element={<PublicView />} />
          {/* Ruta para el panel de administración */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
