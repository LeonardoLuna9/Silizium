import React from 'react';
import './TableEmpleado.css'

const TableEmpleado = () => {
  return (
    <div className="table-1">
        <table className="table" style={{borderRadius: '25px'}} >
        <thead>
            <tr>
            <th scope="col">Certification</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>IBM Agile Explorer</td>
            <td>2020-04-08</td>
            <td>badge</td>
            </tr>
            <tr>
            <td>Data analysis Using Python</td>
            <td>2021-02-16</td>
            <td>external certification</td>
            </tr>
            <tr style={{borderRadius: '25px'}}>
            <td style={{borderRadius: '25px'}}>Think Like a Hacker</td>
            <td style={{borderRadius: '25px'}}>2022-05-19</td>
            <td style={{borderRadius: '25px'}}>badge</td>
            </tr>
        </tbody>
        </table>
     </div>
  );
};

export default TableEmpleado;

