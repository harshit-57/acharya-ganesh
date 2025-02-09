import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const MultipleLineChart = ({ dataX, dataSets, height }) => {
  console.log(dataX, dataSets);
  const theme = useTheme();

  const option = {
    grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
    tooltip: {
      trigger: 'axis' // Trigger for multiple lines
    },
    legend: {
      data: dataSets.map((dataset) => dataset.name), // Display names for all datasets
      itemGap: 20,
      icon: 'circle',
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }
    },
    xAxis: {
      type: 'category',
      data: dataX,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
      },
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' }
    },
    series: dataSets.map((dataset) => ({
      data: dataset.data,
      type: 'line',
      name: dataset.name,
      smooth: true,
      symbolSize: 4,
      lineStyle: { width: 4 },
      itemStyle: { color: dataset.color || theme.palette.primary.main } // Use provided color or default
    }))
  };

  return <ReactEcharts style={{ height: height }} option={option} />;
};

export default MultipleLineChart;
