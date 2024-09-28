import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 220,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

const CircularChart: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 34, 12, 56],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 col-span-12 rounded-xl border border-stroke bg-whiter px-5 pb-7 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-lg font-semibold text-black dark:text-white">
            Total Sales
          </h5>
        </div>
      </div>

      <div className="mb-4">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className='flex justify-between'>
          <p className='text-black dark:text-white font-medium'>Direct</p>
          <p className='text-black dark:text-white font-medium'>300</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-black dark:text-white font-medium'>Affiliate</p>
          <p className='text-black dark:text-white font-medium'>300</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-black dark:text-white font-medium'>Sponsored</p>
          <p className='text-black dark:text-white font-medium'>300</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-black dark:text-white font-medium'>E-mail</p>
          <p className='text-black dark:text-white font-medium'>300</p>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
