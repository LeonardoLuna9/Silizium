import React from 'react';
import './Certificados.css';
import Sidebar from '../components/Sidebar/Sidebar';
import TableComponent from '../components/TableComponent/TableComponent';

const Certificados = () => {
  return (
    <div className='certificados-container'>
      <Sidebar/>
      <TableComponent/>
    </div>
  );
};

export default Certificados;