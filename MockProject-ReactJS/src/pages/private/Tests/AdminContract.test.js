/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import AdminContract from '../AdminContract'; // Đường dẫn đến component AdminContract
import { TableContract } from '../../../components/ComponentAdmin/index';
import { MdPersonAddAlt1 } from 'react-icons/md';

// Giả lập các component con
jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableContract: jest.fn(() => <div>TableContract Component</div>),
}));

describe('AdminContract Component', () => {
  test('renders title, Add Contract button and TableContract component', () => {
    render(<AdminContract />);

    // Kiểm tra tiêu đề "Contract"
    expect(screen.getByText('Contract')).toBeInTheDocument();

    // Kiểm tra nút "Add Contract" và icon
    const addContractButton = screen.getByRole('button', { name: /Add Contract/i });
    expect(addContractButton).toBeInTheDocument();
    expect(screen.getByText('Add Contract')).toBeInTheDocument();
    // Kiểm tra bảng TableContract
    expect(screen.getByText('TableContract Component')).toBeInTheDocument();
  });
});
