import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Point 1", value1: 40, value2: 24, value3: 24 },
  { name: "Point 2", value1: 30, value2: 13, value3: 22 },
  { name: "Point 3", value1: 20, value2: 98, value3: 22 },
  { name: "Point 4", value1: 27, value2: 39, value3: 20 },
  { name: "Point 5", value1: 18, value2: 48, value3: 21 },
  { name: "Point 6", value1: 23, value2: 38, value3: 25 },
  { name: "Point 7", value1: 34, value2: 43, value3: 21 },
];

export const Chart = () => {
  return (
    <div >
      <LineChart width={1100} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value1" stroke="#8884d8" />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="value3" stroke="#ffc658" />
      </LineChart>
    </div>
  );
};

export default Chart;
