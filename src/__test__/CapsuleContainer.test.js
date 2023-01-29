/** @jest-environment jsdom */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CapsuleContainer from '../components/CapsuleContainer';

jest.mock('react', () => {
  const original = jest.requireActual('react')
  return {
    ...original,
    useContext: jest.fn(() => ({
      capsules: []
    }))
  }
})

afterEach(cleanup)

it('renders the "Add an input and search for capsules" message when there are no capsules', () => {
  render(<CapsuleContainer />)
  expect(screen.getByTestId('capsule-container')).toHaveTextContent(
    'Add an input and search for capsules'
  )
})

it('renders the correct number of capsules', () => {
  const capsule = []
  render(<CapsuleContainer capsules={capsule} />)
  expect(screen.queryAllByTestId('capsule-card')).toHaveLength(0)
})
