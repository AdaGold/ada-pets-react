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

      { speciesEmoji(species) } {id} - {name} 
        <button 
          className="btn btn-primary pet-card--select-pet-btn"
          >
            Select
        </button>
        <button 
          type="button" 
          className="btn btn-danger pet-card--close-btn" 
          aria-label="Close"
        >
          Close
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
}
    
export default PetCard;