/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import AdminEquipment from '../AdminEquipment';
import { TableEquipment } from '../../../components/ComponentAdmin/index';

jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableEquipment: jest.fn(() => <div>TableEquipment Component</div>),
}));

describe('AdminEquipment Component', () => {
  test('renders the Equipment section correctly', () => {
    render(<AdminEquipment />);
    expect(screen.getByText('Equipments')).toBeInTheDocument();
    expect(screen.getByText('Add Equipment')).toBeInTheDocument();
    expect(screen.getByText('TableEquipment Component')).toBeInTheDocument();
  });
});
