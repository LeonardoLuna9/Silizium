import React from 'react';
import './Certificados.css';
import Sidebar from '../components/Sidebar/Sidebar';
import TableComponent from '../components/TableComponent/TableComponent';

const Certificados = () => {
  return (
    <div className='certificados-container'>
      <div className='left-sidebar-cert'>
      <Sidebar/>
      </div>
      <div className='right-sidecert'>
        <div className='right-left-upper'>
          <div className='cert-title'>
            <h1>Certifications </h1>
          </div>
        <div className='right-right-upper'>
          <div>   
          </div>
        </div>
        <TableComponent/>  
        </div>
      </div>
    </div>
  );
};

export default Certificados;