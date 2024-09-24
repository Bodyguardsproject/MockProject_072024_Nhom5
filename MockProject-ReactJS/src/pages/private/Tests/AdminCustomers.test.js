/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import AdminCustomers from '../AdminCustomers'; // Đường dẫn đến component AdminCustomers
import { TableCustomer } from '../../../components/ComponentAdmin/index';

// Giả lập component con
jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableCustomer: jest.fn(() => <div>TableCustomer Component</div>),
}));

describe('AdminCustomers Component', () => {
  test('renders title and TableCustomer component', () => {
    render(<AdminCustomers />);

    // Kiểm tra tiêu đề "Customers"
    expect(screen.getByText('Customers')).toBeInTheDocument();

    // Kiểm tra component TableCustomer có render không
    expect(screen.getByText('TableCustomer Component')).toBeInTheDocument();
  });
});
