import React, {Component} from 'react';
import './styles/AppChart.css';

import Chart from 'chart.js'

Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// Data generation
function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for (var i = 0; i < numItems; i++) {
        data.push({
            label: names[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for (var i = 0; i < numItems; i++) {
        data.push({
            time: new Date(baseTime + i * dayMs),
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getData() {
    let data = [];

    data.push({
        title: 'Visits',
        data: getRandomDateArray(150)
    });

    data.push({
        title: 'Categories',
        data: getRandomArray(20)
    });

    data.push({
        title: 'Categories',
        data: getRandomArray(10)
    });

    data.push({
        title: 'Data 4',
        data: getRandomArray(6)
    });

    return data;
}


// BarChart
class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 100
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.color
                }]
            }
        });
    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}


// LineChart
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'week'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map(d => d.time),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        });
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}


// Doughnut
class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'doughnut',
            options: {
                maintainAspectRatio: false
            },
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }]
            }
        });

    }


    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

// Bubble
class BubbleChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bubble',
            data: {
                labels: "Africa",
                datasets: [
                    {
                        label: ["China"],
                        backgroundColor: "rgba(255,221,50,0.2)",
                        borderColor: "rgba(255,221,50,1)",
                        data: [{
                            x: 21269017,
                            y: 5.245,
                            r: 15
                        }]
                    }, {
                        label: ["Denmark"],
                        backgroundColor: "rgba(60,186,159,0.2)",
                        borderColor: "rgba(60,186,159,1)",
                        data: [{
                            x: 258702,
                            y: 7.526,
                            r: 10
                        }]
                    }, {
                        label: ["Germany"],
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderColor: "#000",
                        data: [{
                            x: 3979083,
                            y: 6.994,
                            r: 15
                        }]
                    }, {
                        label: ["Japan"],
                        backgroundColor: "rgba(193,46,12,0.2)",
                        borderColor: "rgba(193,46,12,1)",
                        data: [{
                            x: 4931877,
                            y: 5.921,
                            r: 15
                        }]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }, scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "Happiness"
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "GDP (PPP)"
                        }
                    }]
                }
            }
        });

    }


    render() {
        return <canvas ref={this.canvasRef} />;
    }
}


// App
export default class AppChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getData()
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                data: getData()
            })
        }, 5000)
    }

    render() {
        return (
            <div className="App">
                <div className="main chart-wrapper">
                    <LineChart
                        data={this.state.data[0].data}
                        title={this.state.data[0].title}
                        color="#3E517A"
                    />
                </div>
                <div className="sub chart-wrapper">
                    <BarChart
                        data={this.state.data[1].data}
                        title={this.state.data[1].title}
                        color="#70CAD1"
                    />
                </div>
                <div className="sub chart-wrapper">
                    <BubbleChart/>
                </div>
                <div className="sub chart-wrapper">
                    <DoughnutChart
                        data={this.state.data[3].data}
                        title={this.state.data[3].title}
                        colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                    />
                </div>
            </div>
        );
    }
}