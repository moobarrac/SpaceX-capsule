/** @jest-environment jsdom */
import React from 'react';
import { render, container } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/Banner';
jest.mock('../assests/images/spacex.jpg', () => 'mocked-spacex-url');

describe('Banner component', () => {

  it('renders the correct text in the h1 tag', () => {
    render(<Banner />);
    expect(container).toMatchSnapshot();
  });
});

