import React, { useState } from 'react';
import Chart from 'react-apexcharts'
import useDidMount from 'src/hooks/dom/component.didmount.hook';

/**
 * @function Displays RadialBar graph.
 * @returns ReactApexChart component.
 */
const RadialBar: React.FC = () => {
    const [yData, setYData] = useState([]);

    useDidMount(() => {
        setYData([68]);

    });

    const options = {
        labels: ['RadialBar'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
    }

    return (
        <div className="radialbar">
            <Chart options={options} series={yData} type="radialBar" />
        </div>
    );
}

export default RadialBar;