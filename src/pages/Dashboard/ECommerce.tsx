import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import LineChart from '../../components/Charts/LineChart';
import CircularChart from '../../components/Charts/CircularChart';
import BarChart from '../../components/Charts/BarChart';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="flex gap-8 h-70">
        <div className="grid w-1/2 grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
          <CardDataStats title="Customers" total="3,781" rate="0.43%" levelUp />
          <CardDataStats title="Orders" total="1,219" rate="4.35%" levelUp />
          <CardDataStats title="Revenue" total="$695" rate="2.59%" levelUp />
          <CardDataStats title="Growth" total="30.1%" rate="0.95%" levelDown />
        </div>

        <div className="w-1/2">
          <BarChart />
        </div>
      </div>

      <div className="flex gap-8 mt-8">
        <div className="w-3/4">
          <LineChart />
        </div>

        <div className="w-1/4">
          <MapOne />
        </div>
      </div>

      <div className="flex gap-8 mt-8">
        <div className="w-3/4">
          <TableOne />
        </div>

        <div className="w-1/4">
          <CircularChart />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
