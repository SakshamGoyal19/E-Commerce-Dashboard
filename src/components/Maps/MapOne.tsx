import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import { useEffect } from 'react';
import '../../js/world.js';

const MapOne = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'world',
      zoomButtons: false,

      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#fff',
        },
        hover: {
          cursor: 'pointer',
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split('-')[1];
          },
        },
      },
    });
    mapOne;
  });

  return (
    <div className="col rounded-xl border border-stroke bg-whiter py-4 px-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
        Revenue by Location
      </h4>
      <div id="mapOne" className="mapOne h-50"></div>
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

export default MapOne;
