import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';


const PetCard = ({ id, name, species, about, location, deletePetCallback, selectPetCallback }) => {
  return (
    <div className="card pet-card">

      <section className="pet-card--header">
        {speciesEmoji(species)} {id} - {name}
        <div>
          <button
            onClick={() => { selectPetCallback(id) }}
            className="btn btn-primary pet-card--select-pet-btn"
          >
            Select
        </button>
          <button
            type="button"
            className="btn btn-danger pet-card--close-btn"
            aria-label="Close"
            onClick={() => { deletePetCallback(id) }}
          >
            Close
        </button>
        </div>
      </section>
      <section className="pet-card--body">
        {about.length > 128 ? `${ about.substring(0, 128) }...` : about}
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
  about: PropTypes.string.isRequired, 
  location: PropTypes.string,
  deletePetCallback: PropTypes.func.isRequired,
  selectPetCallback: PropTypes.func.isRequired,
}

export default PetCard;