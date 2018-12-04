import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);
    const petList = pets.map((pet) => {
      pet.currentPet = 0;
      pet.images = pet.images.map((filename) => {
        return `/images/${filename}`;
      });
      return pet;
    });

    this.state = {
      petList,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {
    
    const selectedPet = this.state.petList.find((pet) => {
      return pet.id === petId;
    });
    if (selectedPet) {
      this.setState({
        currentPet: selectedPet,
      });
    }
  }

  onSearchChange = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const petList = pets.filter((pet) => {
      return regex.test(`${pet.name}${pet.about}${pet.species}`.toUpperCase());
    });

    this.setState({
      petList,
    });
  }

  addPet = (newPet) => {
    newPet.id = pets.reduce((max = 0, currentPet) => max ? Math.max(max, currentPet.id): currentPet.id) + 1
    pets.push(newPet);
    this.setState({
      petList: pets,
    });
  }

  removePet = (petId) => {
    let deleteIndex = -1;
    pets.forEach((pet, index) => {
      if (petId === pet.id) {
        deleteIndex = index;
      }
    });
    
    pets.splice(deleteIndex, 1);

    this.setState({
      petList: pets,
    })
  }

  render() {
    const { currentPet } = this.state;
    console.log(this.state.petList);
    
    const details = currentPet ? <PetDetails currentPet={currentPet} /> : '';

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar">
          <SearchBar onSearchChange={this.onSearchChange} />
        </section>
         {details}
        <section className="pet-list">
          <PetList 
            selectPetCallback={this.onSelectPet} 
            deletePetCallback={this.removePet}
            pets={this.state.petList} 
          />
        </section>
        <section>
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
