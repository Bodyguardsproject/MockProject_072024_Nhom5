/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import AdminQuotes from '../AdminQuotes'; // Đường dẫn tới component AdminQuotes
import { TableQuotes } from '../../../components/ComponentAdmin/index';

// Giả lập component con TableQuotes
jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableQuotes: jest.fn(() => <div>TableQuotes Component</div>),
}));

describe('AdminQuotes Component', () => {
  test('renders the Quote section correctly', () => {
    render(<AdminQuotes />);

    // Kiểm tra tiêu đề Quote có hiển thị
    expect(screen.getByText('Quote')).toBeInTheDocument();

    // Kiểm tra component TableQuotes đã render
    expect(screen.getByText('TableQuotes Component')).toBeInTheDocument();
  });
});
