import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: false,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 30,
    stepSize: 10,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const LineChart: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Current Week',
        data: [25, 18, 14, 14, 16, 18],
      },

      {
        name: 'Previous Week',
        data: [10, 18, 22, 21, 16, 10],
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
    <div className="col-span-12 rounded-xl border border-stroke bg-whiter px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap mb-3">
        <div className="flex flex-wrap items-center space-x-2 md:space-x-8">
          <span className="text-lg font-semibold text-black dark:text-white">Revenue</span>
          <span className="border-l h-6 border-gray-300"></span>

          <div className="flex items-center space-x-2">
            <span className="text-primary">●</span>
            <span className="text-medium font-medium text-black dark:text-white">Current Week</span>
            <span className="font-bold text-gray-800">$58,211</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-secondary">●</span>
            <span className="text-medium font-medium text-black dark:text-white">Previous Week</span>
            <span className="font-bold text-gray-800">$68,768</span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
