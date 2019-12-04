import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const getPetCards = (pets, selectPetCallback, deletePetCallback) => {
  return pets.map((pet) => {
    return <PetCard
      key={pet.id}
      {...pet}
      selectPetCallback={selectPetCallback}
      deletePetCallback={deletePetCallback}
    />
  });
}

const PetList = ({ pets, selectPetCallback, deletePetCallback }) => {

  return (
    <div className="card-group">
      {getPetCards(pets, selectPetCallback, deletePetCallback)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  selectPetCallback: PropTypes.func,
  deletePetCallback: PropTypes.func,
};

export default PetList;
