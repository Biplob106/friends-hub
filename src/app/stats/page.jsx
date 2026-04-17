"use client";

import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

export default function StatsPage() {
  const { timeline } = useContext(TimelineContext);

  // Count interactions
  const counts = {
    Call: 0,
    Text: 0,
    Video: 0
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.Text },
    { name: "Call", value: counts.Call },
    { name: "Video", value: counts.Video }
  ];

  // Colors updated to match the screenshot
  const COLORS = [
    "#8b5cf6", // Purple (Text)
    "#1e293b", // Dark Slate/Green (Call)
    "#22c55e"  // Green (Video)
  ];

  return (
    <div className="mt-10 px-4 md:px-0">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-slate-800">
        Friendship Analytics
      </h1>

      {/* Chart Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-4xl mx-auto">
        <h2 className="text-gray-500 font-medium mb-4">By Interaction Type</h2>
        
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                /* innerRadius creates the donut effect */
                innerRadius={80} 
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend 
                verticalAlign="bottom" 
                align="center"
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}