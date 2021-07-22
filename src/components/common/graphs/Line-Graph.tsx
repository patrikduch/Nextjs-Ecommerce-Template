import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import useDidMount from "src/hooks/dom/component.didmount.hook";

const LineGraph: React.FC = () => {

    const [xCategories, setXCategories] = useState([] as number[]);
    const [yData, setYData] = useState([] as number[]);

    useDidMount(() => {

        setXCategories([2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]);
        setYData([30, 40, 45, 50, 49, 60, 70, 91]);

    });

    const options = {

        chart: {
            id: "basic bar"
        },

        xaxis: {
            categories: xCategories
        }
    }

    const series = [
        {
            name: "summary",
            data: yData
        }
    ];


    return (
        <div className="mixed-chart">
            <Chart
                options={options}
                series={series}
                type="bar"
            />
        </div>
    );
}

export default LineGraph;