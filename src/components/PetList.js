import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const petList = props.pets.map((pet) => {
    return <PetCard key={pet.id} 
             deletePetCallback={props.deletePetCallback}
             selectPetCallback={props.selectPetCallback} 
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
