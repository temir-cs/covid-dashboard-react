/* eslint-disable react/self-closing-comp */
import React from 'react';

const SearchPanel = () => (
  <div className="content__search-container">
    <input
      className="content__search  content__search--countries"
      placeholder="Search by Country..."
    />
    <div className="content__search--suggestions"></div>
  </div>
);

export default SearchPanel;
