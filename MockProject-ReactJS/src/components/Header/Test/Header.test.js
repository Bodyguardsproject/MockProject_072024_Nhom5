/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header Navigation Links', () => {
  test('renders all navigation links from options', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const navLinks = ['Home', 'Services', 'About Us', 'BodyGuards', 'Jobs', 'Quote'];

    navLinks.forEach((linkText) => {
      const linkElement = screen.getByText(linkText);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href');
    });
  });
});
