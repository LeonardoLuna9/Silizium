import React, { useState } from 'react';
import './TableComponent.css';
import { Certifications } from '../../data/Certifications';

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Determine the total number of pages based on the items per page value and the length of the array
  const totalPages = Math.ceil(Certifications.length / itemsPerPage);

  // Calculate the range of items currently being shown on the table
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, Certifications.length);

  // Generate an array of page numbers for the dropdown
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    const value = event.target.value;
    setItemsPerPage(parseInt(value));
    setCurrentPage(1); // Reset the current page number when changing the items per page value
  };

  return (
    <div className='tablecomponent-container'>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Org</th>
              <th>Work Location</th>
              <th>Certification</th>
              <th>Issue Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Certifications.slice(startIndex, endIndex).map(({ Id, org, work_location, certification, issue_date, type }) => (
              <tr key={Id}>
                <td>{Id}</td>
                <td>{org}</td>
                <td>{work_location}</td>
                <td>{certification}</td>
                <td>{issue_date}</td>
                <td>{type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className='pagination'>
          <div className='page-info'>
            Page {currentPage} of {totalPages} pages | Showing {startIndex + 1}-{endIndex} of {Certifications.length} IDs
          </div>
          <div className='page-dropdown'>
            <select value={currentPage} onChange={(e) => handlePageChange(parseInt(e.target.value))}>
              {pageNumbers.map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  Page {pageNumber}
                </option>
              ))}
            </select>
          </div>
          <div className='items-per-page-dropdown'>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value='10'>10 items per page</option>
              <option value='50'>50 items per page</option>
              <option value='100'>100 items per page</option>
              <option value={Certifications.length}>All items</option>
            </select>
          </div>
          <div className='page-arrows'>
            <button
              className='arrow-button'
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &lt;
            </button>
            <button
              className='arrow-button'
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
    </div>
  );
};

export default TableComponent;
