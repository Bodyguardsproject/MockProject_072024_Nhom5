/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import AdminAccounts from '../AdminAccounts'; // Đường dẫn component
import { TableAccount, TableStaff, TableBodyguard, CreateAcount } from '../../../components/ComponentAdmin/index';

jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableAccount: jest.fn(() => <div>TableAccount Component</div>),
  TableStaff: jest.fn(() => <div>TableStaff Component</div>),
  TableBodyguard: jest.fn(() => <div>TableBodyguard Component</div>),
  CreateAcount: jest.fn(() => <div>CreateAcount Component</div>),
}));

describe('AdminAccounts Component', () => {
  test('renders Account, Staff, and Bodyguard tables by default', () => {
    render(<AdminAccounts />);

    // Kiểm tra hiển thị các bảng mặc định
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('TableAccount Component')).toBeInTheDocument();
    expect(screen.getByText('Staff')).toBeInTheDocument();
    expect(screen.getByText('TableStaff Component')).toBeInTheDocument();
    expect(screen.getByText('Bodyguard')).toBeInTheDocument();
    expect(screen.getByText('TableBodyguard Component')).toBeInTheDocument();
  });

  test('shows CreateAcount component when clicking "Create Account" button', () => {
    render(<AdminAccounts />);

    // Click vào nút "Create Account"
    const createAccountButton = screen.getByText('Create Account');
    fireEvent.click(createAccountButton);

    // Kiểm tra form CreateAcount xuất hiện
    expect(screen.getByText('CreateAcount Component')).toBeInTheDocument();
    expect(screen.queryByText('TableAccount Component')).not.toBeInTheDocument();
    expect(screen.queryByText('TableStaff Component')).not.toBeInTheDocument();
    expect(screen.queryByText('TableBodyguard Component')).not.toBeInTheDocument();
  });
});
