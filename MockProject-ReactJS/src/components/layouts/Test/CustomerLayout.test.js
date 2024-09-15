/* eslint-disable react/display-name */
/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerLayout from '../CustomerLayout';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import MenuMobile from '../../ui/MenuMobile';
import Footer from '../../ui/Footer';

jest.mock('../../Header/Header', () => () => <div>Header</div>);
jest.mock('../../ui/MenuMobile', () => () => <div>MenuMobile</div>);
jest.mock('../../ui/Footer', () => () => <div>Footer</div>);

describe('CustomerLayout', () => {
  test('renders Header when width is larger than BREAKPOINT', () => {
    window.innerWidth = 1024;

    render(
      <MemoryRouter>
        <CustomerLayout />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
