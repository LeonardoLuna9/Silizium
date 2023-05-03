
import React from 'react';
import './Empleado.css'
import { UserAvatar} from '@carbon/icons-react';
import { Bookmark} from '@carbon/icons-react';

const Empleado = () => {
  return (
      <div className="empleado-container">
        <div className="top-empleado" >
          <div className='top-imagen'>
              <UserAvatar size="125" className='avatar'/>
          </div>
          <div className="top-textos">
              <h1 className="texto">000306781IBM</h1>
              <h2 className="texto2">Guadalajara, JAL.<br/> México</h2>
              <h1 className="texto3">Org</h1>
              <h2 className="texto4">Finance and Operations</h2>
              <Bookmark size="40" className="bookmark"/>
          </div>
      </div>
      <div className="bottom-empleado">
        <div className="table-1">
          <table className="table" >
          <thead>
              <tr>
              <th scope="col" className="col">Certification</th>
              <th scope="col" className="col">Date</th>
              <th scope="col" className="col">Type</th>
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
              <tr>
              <td>Think Like a Hacker</td>
              <td>2022-05-19</td>
              <td>badge</td>
              </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Empleado;
