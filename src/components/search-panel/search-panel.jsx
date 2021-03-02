import React from 'react';
import { connect } from 'react-redux';
import { searchedCountry } from '../../actions';

const onBlur = (e) => {
  e.target.value = '';
};

const SearchPanel = ({ onSearchChange }) => (
  <div className="content__search-container">
    <input
      className="content__search  content__search--countries"
      onChange={(e) => onSearchChange(e.target.value)}
      onBlur={onBlur}
      placeholder="Search by Country..."
    />
    <div className="content__search--suggestions"></div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (query) => dispatch(searchedCountry(query)),
});

export default connect(null, mapDispatchToProps)(SearchPanel);
