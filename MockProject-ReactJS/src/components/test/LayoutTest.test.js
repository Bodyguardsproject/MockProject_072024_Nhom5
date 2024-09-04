/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import matcher
import LayoutTest from './LayoutTest';

describe('LayoutTest', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LayoutTest />);
    
    // Kiểm tra xem tiêu đề "Test" có được render không
    expect(getByText('Test')).toBeInTheDocument();
  });
});
