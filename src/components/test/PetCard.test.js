// src/components/test/NewPetForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import PetCard from '../PetCard';


const doNothing = () => {};
const selectPet = jest.fn();
const deletePet = jest.fn();
const petCard = <PetCard
        id= {1}
        name= "Denali"
        species= "dog"
        about="Most empathetic dog ever"
        location="Seattle, WA"
        deletePetCallback= {deletePet}
        selectPetCallback= {selectPet}
      />;

describe('PetCard', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const result = render(
      petCard
    );

    // Assert
    expect(result.asFragment()).toMatchSnapshot();
  });

  test('that it shows the dogs name', () => {
    // Arrange-Act
    const result = render(
      petCard
    );

    // Assert
    expect(result.getByText(/Denali/)).toBeDefined();
    expect(result.getByText(/Seattle, WA/)).toBeDefined();
    expect(result.getByText(/🐕/)).toBeDefined();
  });

  test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {
    // Render a PetCard
    const selectPet = jest.fn();
    const petCard = <PetCard
            id= {1}
            name= "Denali"
            species= "dog"
            about="Most empathetic dog ever"
            location="Seattle, WA"
            deletePetCallback= {doNothing}
            selectPetCallback= {selectPet}
          />;

    const result = render(petCard);
    

    // Act
    // Find the "Select" button
    const selectButton = result.getByText(/Select/);
    // Trigger a 'click' event
    selectButton.click();

    // Assert
    // Verify that the callback function was called.
    expect(selectPet).toHaveBeenCalled();
  });

  test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {
    // Render a PetCard

    const result = render(petCard);
    

    // Act
    // Find the "Select" button
    const deleteButton = result.getByText(/Close/);
    // Trigger a 'click' event
    deleteButton.click();

    // Assert
    // Verify that the callback function was called.
    expect(deletePet).toHaveBeenCalled();
  });
  afterEach(cleanup);

});