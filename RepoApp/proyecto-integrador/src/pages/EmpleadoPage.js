import React from 'react';
import './EmpleadoPage.css'
import Sidebar from '../components/Sidebar/Sidebar';
import Empleado from '../components/Empleado/Empleado';

const EmpleadoPage = () => {
  return (
    <div className="empleadoPage-container">
      <div className="left-empleadoPage">
      <Sidebar/>
      </div>
      <div className="right-empleadoPage">
      <Empleado/>
      </div>
    </div>
  );
};

export default EmpleadoPage;
