import React, { Component } from 'react';
import axios from 'axios';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: [],
      currentPet: undefined,
      searchTerm: '',
      error: '',
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/pets')
      .then((response) => {
        this.setState({
          petList: response.data,
        });
      })
      .catch((error) => {
        // TODO
      });
  }

  filteredList = () => {
    return this.state.petList.filter((pet) => {
      const text = (`${ pet.name } ${ pet.about } ${ pet.location } ${ pet.species }`).toUpperCase();

      return text.includes(this.state.searchTerm.toUpperCase());
    });
  }


  selectPet = (petId) => {
    const { petList } = this.state;

    const currentPet = petList.find((pet) => {
      return pet.id === petId;
    });

    this.setState({ currentPet, });
  }

  deletePet = (petId) => {
    const petList = this.state.petList.filter((pet) => {
      return pet.id !== petId;
    });

    this.setState({
      petList,
      fullList: petList,
    });
  }

  addPet = (pet) => {

    const { petList } = this.state;
    const petIds = petList.map((pet) => pet.id);
    const maxId = Math.max(...petIds);
    pet.id = maxId + 1;
    petList.push(pet);

    this.setState(petList);
  }

  filterPets = (searchTerm) => {
    this.setState({
      searchTerm,
    });
  }


  render () {
    const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar
            searchChangeCallback={this.filterPets}
            searchTerm={this.state.searchTerm}
          />
        </section>
        { /* Wave 1:  Where Pet Details should appear */}
        {currentPet ? <PetDetails currentPet={currentPet} /> : ''}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList
            pets={this.filteredList()}
            selectPetCallback={this.selectPet}
            deletePetCallback={this.deletePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
