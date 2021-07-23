import React, { useState } from 'react';
import Chart from 'react-apexcharts'
import useDidMount from 'src/hooks/dom/component.didmount.hook';

/**
 * @function ColumnGraph Displays Column graph.
 * @returns ReactApexChart component.
 */
const ColumnGraph: React.FC = () => {

    const [xAxisCategories, setXAxisCategories] = useState([] as string[]);
    const [yData, setYData] = useState([]);

    useDidMount(() => {
        setXAxisCategories(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
        setYData([30, 40, 25, 50, 49, 21, 70, 51]);
    });

    const options = {
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: xAxisCategories
        }
    };

    return (
        <div className="column">
            <Chart options={options} series={[{ data: yData }]} type="bar" />
        </div>
    )
}

export default ColumnGraph;