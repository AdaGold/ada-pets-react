import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onTermChangeCallback }) => {
  return (
    <section>
      <input
        onChange={(event) => { onTermChangeCallback(event.target.value); }}
        value={searchTerm}
        name="search-bar"
        className="search-bar"
        placeholder="Filter Pets"
      />
    </section>
  );
};

SearchBar.propTypes = {
  onTermChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
