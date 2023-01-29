/** @jest-environment jsdom */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Capsule from '../components/Capsule';

describe('Capsule', () => {

  it('opens and closes the modal when clicked', () => {
    const mockCapsule = {
      capsule_id: 'test-id',
      capsule_serial: 'test-serial',
      type: 'test-type',
      status: 'test-status',
      original_launch: 'test-launch',
      missions: [{ name: 'test-mission' }]
    }
    render(<Capsule capsule={mockCapsule} />)
    fireEvent.click(screen.getByTestId('capsule-container'))
    expect(screen.getByTestId('modal')).toBeVisible()
  })
})
