import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled, { useTheme } from 'styled-components';
import { useState, useEffect } from 'react';

export default function PriceChart({
  data1W,
  data1M,
  data3M,
}: PriceChartProps) {
  const [selectedData, setSelectedData] = useState(data1W);
  const [processedData, setProcessedData] = useState<PriceData[]>([]);
  const theme = useTheme();

  useEffect(() => {
    // 크롤링 시작한 지 1일차일 경우에는 한 점이 아니라 양 끝 두 점을 찍어줌
    if (selectedData.length === 1) {
      const singleData = selectedData[0];
      setProcessedData([singleData, { ...singleData }]);
    } else {
      setProcessedData(selectedData);
    }
  }, [selectedData]);

  return (
    <ChartWrapper>
      <ButtonGroup>
        <button onClick={() => setSelectedData(data1W)}>1주</button>
        <button onClick={() => setSelectedData(data1M)}>1개월</button>
        <button onClick={() => setSelectedData(data3M)}>3개월</button>
      </ButtonGroup>
      <ResponsiveContainer width="96%" height="100%">
        <LineChart data={processedData} margin={{ top: 20, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="createdAt"
            axisLine={{ stroke: '#BBB9E3', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 6, fill: 'rgba(12, 12, 12, 0.5)' }}
            tickFormatter={(value, index) => {
              if (index === 0 || index === processedData.length - 1) {
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
            stroke={theme.colors.yellow}
            strokeWidth={'1.5px'}
            width={400}
            dot={{ fill: theme.colors.yellow, r: 4 }}
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
    padding: 1px 3px;
    cursor: pointer;
    background-color: white;
    color: ${({ theme }) => theme.colors.font_black};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.yellow};
      border-radius: 8.5px;
    }

    &:focus {
      outline: none;
    }
  }
`;

interface PriceData {
  createdAt: string;
  price: number;
}

interface PriceChartProps {
  data1W: PriceData[];
  data1M: PriceData[];
  data3M: PriceData[];
}
