/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import AdminNotification from '../AdminNotification';
import { TableNotification } from '../../../components/ComponentAdmin/index';

jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableNotification: jest.fn(() => <div>TableNotification Component</div>),
}));

describe('AdminNotification Component', () => {
  test('renders the Notifications section correctly', () => {
    render(<AdminNotification />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('TableNotification Component')).toBeInTheDocument();
  });
});
