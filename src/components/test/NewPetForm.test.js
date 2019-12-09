// src/components/test/NewPetForm.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewPetForm from '../NewPetForm';

describe('NewPetForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewPetForm
        addPetCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});