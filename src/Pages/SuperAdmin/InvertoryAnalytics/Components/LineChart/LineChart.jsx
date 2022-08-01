import React from 'react'

// Chart.JS :
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// CSS :
import "./LineChart.scss"




// Chart Registry :
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};
//////////////////////////////////////////////////////////////////
// Sample LineChartData :
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const Sample = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 80, 70, 30, 20, 75, 99, 45, 55, 60, 43],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};
//////////////////////////////////////////////////////////////////

const LineChart = ({title , lineChartData}) => {
    return (
        <>
            <div className="linechart_container">
                <div className="heading">
                    {title}
                </div>
                <div className="chart">
                    <Line style={{ height: "280px" }} options={options} data={lineChartData} />
                </div>
            </div>
        </>
    )
}

export default LineChart