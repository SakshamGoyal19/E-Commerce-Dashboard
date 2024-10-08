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
    <div className="col rounded-xl border border-stroke bg-whiter py-4 px-7 md:py-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
        Revenue by Location
      </h4>
      <div id="mapOne" className="mapOne h-40"></div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-black dark:text-white font-medium">New York</span>
          <span className="text-black dark:text-white font-medium">72K</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-blue-400 rounded-full w-4/5"></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-black dark:text-white font-medium">San Francisco</span>
          <span className="text-black dark:text-white font-medium">39K</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-blue-400 rounded-full w-2/5"></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-black dark:text-white font-medium">Sydney</span>
          <span className="text-black dark:text-white font-medium">25K</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-blue-400 rounded-full w-1/4"></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-black dark:text-white font-medium">Singapore</span>
          <span className="text-black dark:text-white font-medium">61K</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-blue-400 rounded-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default MapOne;
