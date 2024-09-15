/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import {AboutUsTemplate} from '../AboutUsTemplate'; 


jest.mock('../../ui/BannerHomeLayout', () => () => <div>BannerHomeLayout</div>);
jest.mock('../../ui/BannerAllNav', () => () => <div>BannerAllNav</div>);


beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
});


describe('AboutUsTemplate', () => {
  test('renders BannerHomeLayout, BannerAllNav, and content sections', () => {
    render(<AboutUsTemplate />);
    expect(screen.getByText('BannerHomeLayout')).toBeInTheDocument();
    expect(screen.getByText('BannerAllNav')).toBeInTheDocument();

    expect(
      screen.getByText('About Fast Guard Service', { exact: false })
    ).toBeInTheDocument();
    
    expect(screen.getByText('Our Commitment')).toBeInTheDocument();
    expect(
      screen.getByText(
        /At Fast Guard Service, we prioritize your safety and security above all else./
      )
    ).toBeInTheDocument();

    expect(screen.getByText('Why choose our Services?')).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    render(<AboutUsTemplate />);

    const image = screen.getByAltText('Fast Guard Service px-5');
    expect(image).toBeInTheDocument();
  });
});
