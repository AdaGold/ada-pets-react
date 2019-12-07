import React from 'react';
import { render, cleanup } from '@testing-library/react'
import PetCard from '../PetCard';

describe('PetCard', () => {
  afterEach(cleanup);

  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Don't touch the hair!"}
      location={"Seattle, WA"}
      deletePetCallback={() => { }}
      selectPetCallback={() => { }}
    />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {

    // Arrange
    // Create a mock callback function
    const selectPet = jest.fn();

    // Render a PetCard
    const container = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Dont' touch the hair"}
      location={"Seattle, WA"}
      deletePetCallback={() => { }}
      selectPetCallback={selectPet}
    />);

    // Act
    // Find the "Select" button
    const selectButton = container.getByText(/Select/);
    // Trigger a 'click' event
    selectButton.click();

    // Assert
    // Verify that the callback function was called.
    expect(selectPet).toHaveBeenCalled();
  });
});