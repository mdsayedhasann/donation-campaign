/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { getDonations } from "../../utility/localStorage";

const Statistics = () => {
  const loadData = useLoaderData();
  const [totalDonate, setTotalDonated] = useState([]);

  useEffect(() => {
    const localStoragerData = getDonations();
    if (loadData.length > 0) {
      const donatedData = loadData.filter((donate) =>
        localStoragerData.includes(donate.id)
      );
      setTotalDonated(donatedData);
    }
  }, []);

  const data = [
    { name: "Group A", value: loadData.length - totalDonate.length },
    { name: "Group B", value: totalDonate.length },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center text-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex items-center gap-4">
          <h3>Your Donation</h3>
          <div className="bg-[#00C49F] h-3 w-40"></div>
        </div>

        <div className="flex items-center gap-4">
          <h3>Total Donation</h3>
          <div className="bg-[#FF444A] h-3 w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
