import React from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts'
import useDidMount from 'src/hooks/dom/component.didmount.hook';

/**
 * @interface ISeriesState Type annotation for series state array.
 */
interface ISeriesState {
    name: string;
    data: number[];
}

/**
 * @function AreaGraph Displays Area graph.
 * @returns ReactApexChart component.
 */
const AreaGraph: React.FC = () => {

    const [xAxisCategories, setXAxisCategories] = useState([] as string[]);
    const [series, setSeries] = useState([] as ISeriesState[]);

    useDidMount(() => {
        setXAxisCategories(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);

        setSeries([
            {
                name: 'series-1',
                data: [30, 40, 25, 50, 49, 21, 70, 51]
            },

            {
                name: 'series-2',
                data: [23, 12, 54, 61, 32, 56, 81, 19]
            }
        ])
    });

    return (
        <div className="area">
            <Chart options={{ xaxis: { categories: xAxisCategories } }} series={series} type="area" />
        </div>
    );
}

export default AreaGraph;