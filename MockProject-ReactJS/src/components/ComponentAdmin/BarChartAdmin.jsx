import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Month 1", revenue: 4000 },
  { name: "Month 2", revenue: 3000 },
  { name: "Month 3", revenue: 5000 },
  { name: "Month 4", revenue: 2000 },
  { name: "Month 5", revenue: 2500 },
];

export const BarChartAdmin = () => {
  return (
    <div>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#FFA726" />
      </BarChart>
    </div>
  );
};

export default BarChartAdmin;
