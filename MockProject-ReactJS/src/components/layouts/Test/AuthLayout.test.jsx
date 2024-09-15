/* eslint-disable no-undef */

import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthLayout from '../AuthLayout';
import { MemoryRouter } from 'react-router-dom';
import logo from '../../../assets/logo_login.webp'

jest.mock('../../../assets/logo_login.webp', () => 'mocked-logo-path');

describe('AuthLayout', () => {
  test('renders logo and Outlet component', () => {
    render(
      <MemoryRouter>
        <AuthLayout />
      </MemoryRouter>
    );

    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'mocked-logo-path');
  });
});
