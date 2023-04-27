import {BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Inicio from './pages/Inicio';
import Certificados from './pages/Certificados';
import Bookmark from './pages/Bookmark';
import Empleado from './pages/Empleado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Inicio" element={<Inicio/>} />
          <Route path="/Certificaciones" element={<Certificados/>} />
          <Route path="/Bookmark" element={<Bookmark/>} />
          <Route path="/Empleado" element={<Empleado/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
