import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const LineChart = ({ dataX, dataY, height, color = [], name }) => {
    const theme = useTheme();

    const option = {
        grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                fontSize: 13,
                color: theme.palette.text.secondary,
                fontFamily: theme.typography.fontFamily,
            },
        },
        label: {
            fontSize: 13,
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily,
        },
        xAxis: {
            type: 'category',
            data: dataX,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 14,
                fontFamily: 'roboto',
                color: theme.palette.text.secondary,
            },
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        series: [
            {
                data: dataY,
                type: 'line',
                stack: 'This month',
                name: name,
                smooth: true,
                symbolSize: 4,
                lineStyle: { width: 4 },
            },
        ],
    };

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{ ...option, color: [...color] }}
        />
    );
};

export default LineChart;
