import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const BarChart: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Projections',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'Actual',
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
  });
  
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;  

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-whiter p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Projections vs Actual
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            height={194}
            options={options}
            series={state.series}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
