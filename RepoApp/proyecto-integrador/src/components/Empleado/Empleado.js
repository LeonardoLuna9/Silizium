
import React from 'react';
import './Empleado.css';
import { UserAvatar} from '@carbon/icons-react';
import { Bookmark} from '@carbon/icons-react';

const Empleado = () => {
  return (
    <div>
        <div className="empleado-container"></div>
        <div>
            <UserAvatar size="125" className='avatar'/>
        </div>
        <div>
            <h1 className="texto">000306781IBM</h1>
            <h2 className="texto2">Guadalajara, JAL.<br/> México</h2>
            <h1 className="texto3">Org</h1>
            <h2 className="texto4">Finance and Operations</h2>
            <Bookmark size="40" className="bookmark"/>
        </div>
    </div>
  );
};

export default Empleado;
