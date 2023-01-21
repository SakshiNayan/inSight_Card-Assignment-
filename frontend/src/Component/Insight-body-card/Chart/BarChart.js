import React from 'react';
//import {Line} from 'react-chartjs-2'
import Data from '../../../data/0482520d3e5b1076b1f31b27abe9a5a4.json'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import {
//     Chart as ChartJS,
//     TimeScale, //Import timescale instead of category for X axis
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   } from "chart.js";
// //import { Chart } from "react-chartjs-2";
// ChartJS.register(
//     TimeScale, //Register timescale instead of category for X axis
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );
//   export const options = {
//     response: true,
//     scales: {
//       xAxes: [
//         {
//           type: "time",
//           time: {
//             unit: "day"
//           }
//         }
//       ]
//     }
//   };
  
//   const values = [
//     {
//       x: new Date("2020-01-01"),
//       y: 100.2
//     },
//     {
//       x: new Date("2020-01-02"),
//       y: 102.2
//     },
//     {
//       x: new Date("2020-01-03"),
//       y: 105.3
//     },
//     {
//       x: new Date("2020-01-11"),
//       y: 104.4
//     }
//   ];
  
//   export const data = {
//     datasets: [
//       {
//         data: values
//       }
//     ]
//   };
  
function BarChart() {
  return (
    <div>
         <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={Data} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " top-Drivers"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />

          </LineChart>

         </ResponsiveContainer>
    </div>
  )
}

export default BarChart