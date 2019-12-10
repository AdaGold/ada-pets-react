import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = ({ pets, deletePetCallback, selectPetCallback }) => {
  const petList = pets.map((pet) => {
    return <PetCard key={pet.id}
      deletePetCallback={deletePetCallback}
      selectPetCallback={selectPetCallback}
      {...pet} />
  });

  return (
    <div className="card-group">
      {petList}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
