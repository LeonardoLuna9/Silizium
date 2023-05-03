import React from 'react';
import './Sidebar.css';
import { Bee } from '@carbon/icons-react';
import { Home } from '@carbon/icons-react';
import { Policy } from '@carbon/icons-react';
import { TableOfContents } from '@carbon/icons-react';
import { Logout} from '@carbon/icons-react';

const Sidebar = () => {
  return (
    <div className='container-sidebar'>
      <div>
        <Bee size="56" className="bee"/>
      </div>
      <div className='linea'></div>
      <div>
        <Home size="56" className="home"/>
      </div>
      <div>
        <Policy size="56" className="policy" />
      </div>
      <div className="table-container1">
        <TableOfContents size="56" className="table1" />
      </div>
      <div>
        <Logout size="56" className="logout" />
      </div>
    </div>
  );
};

export default Sidebar;
