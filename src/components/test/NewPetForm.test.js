import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewPetForm from '../NewPetForm';

describe('NewPetForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const container = render(
      <NewPetForm
        addPetCallback={() => { }}
      />
    );

    // Assert
    expect(container.asFragment()).toMatchSnapshot();
    cleanup();
  });
});
