// import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';
// import { useState } from 'react';
// import { COLORS } from '../../constant/theme';

// interface DataPoint {
//   date: string;
//   price: number;
// }

// interface PriceChartProps {
//   data1M: DataPoint[];
//   data3M: DataPoint[];
//   data6M: DataPoint[];
// }

// export default function PriceChart({
//   data1M,
//   data3M,
//   data6M,
// }: PriceChartProps) {
//   const [selectedData, setSelectedData] = useState(data1M);

//   const options: ApexCharts.ApexOptions = {
//     chart: {
//       type: 'line',
//       zoom: { enabled: false },
//     },
//     colors: [COLORS.yellow],
//     markers: {
//       size: 6,
//       colors: [COLORS.yellow],
//       strokeColors: COLORS.yellow,
//       strokeWidth: 2,
//     },
//     xaxis: {
//       type: 'datetime',
//       tickAmount: 3,
//       tickPlacement: 'on',
//       labels: {
//         formatter: (value) => {
//           if (value) {
//             const date = new Date(value);
//             const startDate = new Date(selectedData[0].date); // 시작일
//             const endDate = new Date(
//               selectedData[selectedData.length - 1].date
//             ); // 끝일

//             if (date.getTime() === startDate.getTime()) {
//               return selectedData[0].date; // 시작일 표시
//             } else if (date.getTime() === endDate.getTime()) {
//               return selectedData[selectedData.length - 1].date; // 끝일 표시
//             } else {
//               return ''; // 시작일과 끝일 외에는 빈 문자열 반환
//             }
//           }
//           return ''; // value가 없으면 빈 문자열 반환
//         },
//         style: {
//           fontSize: '6px', // 폰트 크기 줄이기
//           cssClass: 'asd',
//         },
//       },
//     },
//     tooltip: {
//       x: {
//         formatter: (value) => {
//           const date = new Date(value);
//           return `${date.getMonth() + 1}월 ${date.getDate()}일`; // 툴팁에서 날짜 표시
//         },
//       },
//     },
//     stroke: {
//       curve: 'straight',
//     },
//   };

//   const handleRangeChange = (range: '1M' | '3M' | '6M') => {
//     setSelectedData(range === '1M' ? data1M : range === '3M' ? data3M : data6M);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleRangeChange('1M')}>1개월</button>
//         <button onClick={() => handleRangeChange('3M')}>3개월</button>
//         <button onClick={() => handleRangeChange('6M')}>6개월</button>
//       </div>
//       <Chart
//         options={options}
//         series={[
//           {
//             name: 'Price',
//             data: selectedData.map(({ date, price }) => [
//               new Date(date).getTime(),
//               price,
//             ]),
//           },
//         ]}
//         type="line"
//       />
//     </div>
//   );
// }

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { COLORS } from '../../constant/theme';
import styled from 'styled-components';
import { useState } from 'react';

interface PriceData {
  date: string;
  price: number;
}

interface PriceChartProps {
  data1M: PriceData[];
  data3M: PriceData[];
  data6M: PriceData[];
  data1Y: PriceData[];
}

export default function PriceChart({
  data1M,
  data3M,
  data6M,
  data1Y,
}: PriceChartProps) {
  const [selectedData, setSelectedData] = useState(data1M);
  return (
    <ChartWrapper>
      <ButtonGroup>
        <button onClick={() => setSelectedData(data1M)}>1개월</button>
        <button onClick={() => setSelectedData(data3M)}>3개월</button>
        <button onClick={() => setSelectedData(data6M)}>6개월</button>
        <button onClick={() => setSelectedData(data1Y)}>1년</button>
      </ButtonGroup>
      <ResponsiveContainer width="96%" height="100%">
        <LineChart data={selectedData} margin={{ top: 20, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={{ stroke: '#BBB9E3', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 6, fill: 'rgba(12, 12, 12, 0.5)' }}
            tickFormatter={(value, index) => {
              if (index === 0 || index === selectedData.length - 1) {
                return value;
              }
              return '';
            }}
          />
          <YAxis
            axisLine={{ stroke: '#BBB9E3', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 6, fill: 'rgba(12, 12, 12, 0.5)' }}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="price"
            stroke={`${COLORS.yellow}`}
            strokeWidth={'1.5px'}
            width={400}
            dot={{ fill: `${COLORS.yellow}`, r: 4 }}
            animationDuration={100}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.figure`
  position: relative;
  left: -6.37%;
  width: 100vw;
  height: 90%;
`;

const ButtonGroup = styled.div`
  width: 88.86%;
  position: relative;
  left: 5.57%;
  gap: 10px;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  padding: 0 10px;

  button {
    width: 30px;
    height: 15px;
    border-width: 1px;
    font-size: 7px;
    box-sizing: border-box;
    font-weight: bold;
    padding: 2px 4px;
    cursor: pointer;
    background-color: white;

    &:hover {
      border: 1px solid ${COLORS.yellow};
      border-radius: 8.5px;
    }

    &:focus {
      outline: none;
    }
  }
`;
