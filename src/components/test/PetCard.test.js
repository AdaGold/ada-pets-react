// src/components/test/NewPetForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import PetCard from '../PetCard';


let doNothing = () => {};
const selectPet = jest.fn();
let petCard = <PetCard
        id= {1}
        name= "Denali"
        species= "Golden Retriever"
        about="Most empathetic dog ever"
        location="Seattle, WA"
        deletePetCallback= {doNothing}
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
    cleanup();
  });
});

describe('PetCard', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const result = render(
      petCard
    );

    // Assert
    expect(result.getByText(/Denali/)).toBeDefined();
    cleanup();
  });
});

test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {
  // Render a PetCard
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