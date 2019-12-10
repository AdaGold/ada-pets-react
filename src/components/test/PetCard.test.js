import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PetCard from '../PetCard';

describe('PetCard', () => {
  afterEach(cleanup);

  test('Snapshot test for PetCard', () => {
    const container = render(
      <PetCard
        id={1}
        name={'Herminie'}
        species={"Ox"}
        about={'Herminie is my lovely oxen'}
        location={'Singapore'}
        deletePetCallback={() => { }}
        selectPetCallback={() => { }}
      />);

    expect(container.asFragment()).toMatchSnapshot();
  });

  test('It will render the proper name for the pet', () => {
    // Arrange & Act
    const container = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Don't touch the hair!"}
      location={"Seattle, WA"}
      deletePetCallback={() => { }}
      selectPetCallback={() => { }}
    />);

    // Assert
    expect(container.getByText(/Samson/)).toBeDefined();
    expect(container.getByText(/Seattle/)).toBeDefined();

  });

  test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {
    // Arrange
    const callback = jest.fn();

    const container = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Don't touch the hair!"}
      location={"Seattle, WA"}
      deletePetCallback={() => { }}
      selectPetCallback={callback}
    />);

    // Act
    const button = container.getByText(/Select/);
    button.click();

    expect(callback).toHaveBeenCalled();
  });
});