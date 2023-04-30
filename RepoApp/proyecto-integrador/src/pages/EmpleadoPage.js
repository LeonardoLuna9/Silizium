import React from 'react';
import './EmpleadoPage.css'
import Sidebar from '../components/Sidebar/Sidebar';
import Empleado from '../components/Empleado/Empleado';

const EmpleadoPage = () => {
  return (
    <div>
      <Sidebar/>
      <Empleado/>
    </div>
  );
};

export default EmpleadoPage;
