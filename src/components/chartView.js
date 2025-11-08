import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ChartView = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data.reverse()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" tickFormatter={(v) => new Date(v).toLocaleTimeString()} />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temp (°C)" />
      <Line type="monotone" dataKey="humidity" stroke="#0077ff" name="Humidity (%)" />
    </LineChart>
  </ResponsiveContainer>
);

export default ChartView;
