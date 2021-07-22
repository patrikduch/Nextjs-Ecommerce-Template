import React from 'react'

export default class DonutGraph extends React.Component {

    state = {
        inClient: false
    };

    componentDidMount() {
        this.setState({ inClient: true });
    }

    render() {
        let graph;
        if (this.state.inClient) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const Chart = require('react-chartjs-2');
            graph = <Chart.Doughnut data={data} />;
        } else {
            graph = <span> Chart cannot be rendered. </span>;
        }
        return graph;
    }
}

const data = {
    labels: [
        'Bitcoin',
        'Dogecoin',
        'Babydoge'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};