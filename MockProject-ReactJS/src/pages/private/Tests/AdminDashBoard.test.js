/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import AdminDashBoard from '../AdminDashBoard'; 
import {
  Chart,
  Recruitment,
  BarChartAdmin,
} from '../../../components/ComponentAdmin/index';

// Giả lập các component con
jest.mock('../../../components/ComponentAdmin/index', () => ({
  Chart: jest.fn(() => <div>Chart Component</div>),
  Recruitment: jest.fn(() => <div>Recruitment Component</div>),
  BarChartAdmin: jest.fn(() => <div>BarChartAdmin Component</div>),
}));

describe('AdminDashBoard Component', () => {
  test('renders the dashboard sections correctly', () => {
    render(<AdminDashBoard />);

    // Kiểm tra các tiêu đề chính có được hiển thị
    expect(screen.getByText('Revenue Report Over Time')).toBeInTheDocument();
    expect(screen.getByText('Recruitment')).toBeInTheDocument();
    expect(screen.getByText('Revenue Growth')).toBeInTheDocument();

    // Kiểm tra các nút Filter và Export có hiển thị
    expect(screen.getAllByText('Filter').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Export').length).toBeGreaterThan(0);

    // Kiểm tra các component con đã render
    expect(screen.getByText('Chart Component')).toBeInTheDocument();
    expect(screen.getByText('Recruitment Component')).toBeInTheDocument();
    expect(screen.getByText('BarChartAdmin Component')).toBeInTheDocument();
  });
});
