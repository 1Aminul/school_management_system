import React from 'react';
import ReactApexChart from 'react-apexcharts';


class LineCharts extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          
        series: [
          {
            data: [
              {
                x: '2008',
                y: [2800, 4500]
              },
              {
                x: '2009',
                y: [3200, 4100]
              },
              {
                x: '2010',
                y: [2950, 7800]
              },
              {
                x: '2011',
                y: [3000, 4600]
              },
              {
                x: '2012',
                y: [3500, 4100]
              },
              {
                x: '2013',
                y: [4500, 6500]
              },
              {
                x: '2014',
                y: [4100, 5600]
              }
            ]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
              enabled: false,
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 350
              },
              legend: {
                show: true,
              }
            }
          }],
          plotOptions: {
            bar: {
              isDumbbell: true,
              columnWidth: 10,
              dumbbellColors: [['#008FFB', '#00E396']]
            }
          },
          legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Product A', 'Product B']
          },
          fill: {
            type: 'gradient',
            gradient: {
              type: 'vertical',
              gradientToColors: ['#00E396'],
              inverseColors: true,
              stops: [0, 100]
            }
          },
          grid: {
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          xaxis: {
            tickPlacement: 'on'
          }
        },
      
      
      };
    }
  
    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
        </div>
      );
    }
  }
  
  export default LineCharts;