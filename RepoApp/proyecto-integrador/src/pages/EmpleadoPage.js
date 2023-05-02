import React from 'react';
import './EmpleadoPage.css'
import Sidebar from '../components/Sidebar/Sidebar';
import Empleado from '../components/Empleado/Empleado';
import TableEmpleado from '../components/TableEmpleado/TableEmpleado';

const EmpleadoPage = () => {
  return (
    <div>
      <div >
      <Sidebar/>
      </div>
      <div>
      <Empleado/>
      </div>
      <div>
      <TableEmpleado/>
      </div>
    </div>
  );
};

export default EmpleadoPage;
