import React from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

// Sample chart data
const pdata = [
  {
    timestamp: "2022-12-29T02:00:00Z",
    value: 3,
  },
  {
    timestamp: "2022-12-28T21:00:00Z",
    value: 10,
  },
  {
    timestamp: "2022-12-28T19:00:00Z",
    value: 6,
  },
  {
    timestamp: "2022-12-28T15:00:00Z",
    value:5,
  },
  {
    "timestamp": "2022-12-28T16:00:00Z",
    "value": 8,
  },
  {
    "timestamp": "2022-12-28T20:00:00Z",
    "value": 14,
  },
  {
    "timestamp": "2022-12-28T17:00:00Z",
    "value": 9,
  }
];

function BarChart(){
  return(
    <div style={{paddingBottom:"80px"}}>
    <h2 className="text-heading" style={{marginLeft :"250px" , paddingBottom:"30px", marginTop:"80px"}}>
              Insight Line Graph
          </h2>
          <ResponsiveContainer width="90%" aspect={3}>
              <LineChart data={pdata} margin={{ right: 300, left: 200 }}>
                  <CartesianGrid />
                  <XAxis dataKey="timestamp" 
                      interval={'preserveStartEnd'} />
                  <YAxis></YAxis>
                  <Legend />
                  <Tooltip />
                  <Line dataKey="value"
                      stroke="blue" activeDot={{ r: 8 }} />
                  
              </LineChart>
          </ResponsiveContainer >
    </div>
  )
}
 export default BarChart