import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = (props) => {
  const { id, name, species, about, location } = props;
  return (
    <div className="card pet-card">

      <section className="pet-card--header">
      <button 
        onClick={() => props.deletePetCallback(props.id)}
        type="button" 
        className="close pet-card--close-btn" 
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      { speciesEmoji(species) } {id} - {name} 
        <button 
          onClick={() => {props.selectPetCallback(props.id)}} 
          className="btn btn-primary pet-card--select-pet-btn"
          >
            Select
        </button>
      </section>
      <section className="pet-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {location}
      </section>
    </div>
  );
};
    
PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired, 
  species: PropTypes.string.isRequired, 
  about: PropTypes.string, 
  location: PropTypes.string,
  deletePetCallback: PropTypes.func.isRequired,
  selectPetCallback: PropTypes.func.isRequired,
}
    
export default PetCard;