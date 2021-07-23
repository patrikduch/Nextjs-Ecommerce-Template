import React, { useState } from 'react';
import Chart from 'react-apexcharts'
import useDidMount from 'src/hooks/dom/component.didmount.hook';

/**
 * @function DonutGraph Displays Donut graph.
 * @returns ReactApexChart component.
 */
const DonutGraph: React.FC = () => {

    const [xAxisCategories, setXAxisCategories] = useState([] as string[]);
    const [yData, setYData] = useState([]);

    useDidMount(() => {
        setXAxisCategories(['A', 'B', 'C', 'D', 'E']);
        setYData([44, 55, 41, 17, 15]);
    });

    return (
        <Chart options={{ labels: xAxisCategories }} series={yData} type="donut" />
    );
}

export default DonutGraph;