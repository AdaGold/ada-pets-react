import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewPetForm from '../NewPetForm';

describe('NewPetForm', () => {

  test('Snapshot test for NewPetForm', () => {
    const container = render(
      <NewPetForm
        addPetCallback={() => { }}
      />);

    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});