import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
    }
  }

  onInputChange = (event) => {
    const searchBar = event.target.value;

    this.setState({
      searchBar,
    });

    this.props.searchChangeCallback(searchBar);
  }

  render () {
    return (
      <section>
        <div>
          <label className="search-bar--label" htmlFor="searchBar">Search</label>
        </div>
        <input
          onChange={this.onInputChange}
          value={this.state.searchBar}
          name="searchBar"
          id="searchBar"
          className="search-bar"
        />
      </section>
    );
  }
};

SearchBar.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
};

export default SearchBar;
