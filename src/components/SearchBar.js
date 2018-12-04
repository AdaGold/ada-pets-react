import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });

    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <section>
        <input 
          onChange={this.onSearchChange}
          value={this.state.searchValue}
          name="search-bar"
          className="search-bar"
          placeholder="Filter Pets"
        />
      </section>
    );
  }
};

SearchBar.propTypes = {
  onSearchChange: PropTypes.func,
};

export default SearchBar;
