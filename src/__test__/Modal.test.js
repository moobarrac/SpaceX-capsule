/** @jest-environment jsdom */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal';


describe('Modal', () => {
  it('should render the modal when isOpen prop is true', () => {
    render(
      <Modal 
        isOpen={true} 
        onClose={() => {}} 
        information={{
          capsule_id: 'test-capsule-id',
          capsule_serial: 'test-capsule-serial',
          details: 'test-details',
          landings: 0,
          missions: [{ name: 'test-mission' }],
          original_launch: 'test-launch-date',
          original_launch_unix: 0,
          reuse_count: 0,
          status: 'test-status',
          type: 'test-type'
        }} 
      />
    );
    expect(screen.getByText('test-capsule-serial')).toBeInTheDocument();
    expect(screen.getByText('test-capsule-id')).toBeInTheDocument();
    expect(screen.getByText('test-details')).toBeInTheDocument();
    expect(screen.getByText('Landings: 0')).toBeInTheDocument();
    expect(screen.getByText('Original Launch: test-launch-date')).toBeInTheDocument();
    expect(screen.getByText('Original Launch Unix: 0')).toBeInTheDocument();
    expect(screen.getByText('Reuse Count: 0')).toBeInTheDocument();
    expect(screen.getByText('Status: test-status')).toBeInTheDocument();
    expect(screen.getByText('Type: test-type')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal isOpen={true} onClose={onCloseMock} information={{}} />);
    fireEvent.click(screen.getByText('Close'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
