import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AppDataContext } from '../../providers/AppDataProvider';

interface Order {
  id: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
  statusColor: string;
}

const OrderList: React.FC = () => {
  const [search, setSearch] = useState('');
  const { appData } = useContext(AppDataContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(appData.darkMode);
  }, [appData])

  const orders: Order[] = [
    { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'text-blue-500' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'text-green-500' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'text-blue-400' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'text-yellow-500' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'text-gray-500' },
  ];

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(search.toLowerCase()) ||
    order.user.toLowerCase().includes(search.toLowerCase()) ||
    order.project.toLowerCase().includes(search.toLowerCase()) ||
    order.address.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      name: 'Order ID',
      selector: (row: Order) => row.id,
      sortable: true,
    },
    {
      name: 'User',
      selector: (row: Order) => row.user,
      sortable: true,
    },
    {
      name: 'Project',
      selector: (row: Order) => row.project,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row: Order) => row.address,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row: Order) => row.date,
      sortable: true,
    },
    {
      name: 'Status',
      cell: (row: Order) => (
        <span className={`font-semibold ${row.statusColor}`}>
          {row.status}
        </span>
      ),
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: isDarkMode ? '#1F2937' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
      },
    },
    headCells: {
      style: {
        backgroundColor: isDarkMode ? '#111827' : '#f4f4f9',
        color: isDarkMode ? '#fff' : '#000',
      },
    },
    pagination: {
      style: {
        backgroundColor: isDarkMode ? '#1F2937' : '#fff',
        color: isDarkMode ? '#fff' : '#000',
      },
    },
  };

  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">Order List</h1>

      {/* Buttons and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        {/* Buttons (Left-aligned) */}
        <div className="flex space-x-2">
          {/* Add Button */}
          <button className="bg-blue-500 text-white p-2 rounded-md shadow hover:bg-blue-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>

          {/* Sort Button */}
          <button className="bg-gray-100 text-gray-700 p-2 rounded-md shadow hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h6m0 0l-3-3m3 3l-3 3m12 10h-6m0 0l3 3m-3-3l3-3"></path>
            </svg>
          </button>

          {/* Filter Button */}
          <button className="bg-gray-100 text-gray-700 p-2 rounded-md shadow hover:bg-gray-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V18a1 1 0 01-.553.894l-3 1.5A1 1 0 018 19.618V12.414L3.293 6.707A1 1 0 013 6V4z"></path>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Orders..."
          className="w-full px-4 py-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-boxdark"
        />
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filteredOrders}
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles}
      />
    </div>
  );
};

export default OrderList;
