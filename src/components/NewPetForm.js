import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      about: '',
      images: [],
      image: '',
      location: '',
    };
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.name && this.state.species) {
      this.props.addPetCallback({
        name: this.state.name,
        species: this.state.species,
        about: this.state.about,
        location: this.state.location,
        images: [this.state.image]
      });

      this.setState({
        name: '',
        species: '',
        about: '',
        images: [],
        image: '',
        location: '',
      });
    }
  }

  render () {
    return (
      <form className="new-pet-form" onSubmit={this.onSubmitHandler}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */}
        <div>
          <label className="new-pet-form--label" htmlFor="name">Name: </label>
          <input
            name="name"
            id="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="species">Species: </label>
          <select
            name="species"
            id="species"
            onChange={this.onInputChange}
            value={this.state.species}
          >
            <option value=""></option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="image">Image: </label>
          <input
            name="image"
            id="image"
            onChange={this.onInputChange}
            value={this.state.image}
          />
        </div>
        <div>
          <label className="new-pet-form--label" htmlFor="location">Location: </label>
          <input
            name="location"
            id="location"
            onChange={this.onInputChange}
            value={this.state.location}
          />
        </div>
        <div><label className="new-pet-form--label" htmlFor="about">About: </label></div>
        <div>
          <textarea
            name="about"
            id="about"
            className="new-pet-form--about"
            onChange={this.onInputChange}
            value={this.state.about}
          >
            {this.state.about}
          </textarea>
        </div>
        <input
          className="btn btn-success new-pet-form--submit"
          type="submit"
          name="submit"
          value="Add a Pet"
          onClick={this.onSubmitHandler}
        />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
