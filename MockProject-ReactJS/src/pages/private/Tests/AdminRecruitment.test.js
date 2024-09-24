/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import AdminRecruitment from '../AdminRecruitment';
import { AiOutlineUserAdd } from "react-icons/ai";
import { TableRecruitment } from '../../../components/ComponentAdmin/index';

jest.mock('../../../components/ComponentAdmin/index', () => ({
  TableRecruitment: jest.fn(() => <div>TableRecruitment Component</div>),
}));

describe('AdminRecruitment Component', () => {
  test('renders the Recruitment section correctly', () => {
    render(<AdminRecruitment />);

    expect(screen.getByText('Recruitment')).toBeInTheDocument();
    expect(screen.getByText('Add Recruitment')).toBeInTheDocument();
    expect(screen.getByText('TableRecruitment Component')).toBeInTheDocument();
  });
});
