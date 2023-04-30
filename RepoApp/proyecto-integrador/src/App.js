import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Inicio from './pages/Inicio';
import Certificados from './pages/Certificados';
import Bookmark from './pages/Bookmark';
import EmpleadoPage from './pages/EmpleadoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/Certificaciones" element={<Certificados/>} />
          <Route path="/Bookmark" element={<Bookmark/>} />
          <Route path="/Empleado" element={<EmpleadoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
