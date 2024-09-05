import React from 'react';

const TransactionManagementComponent = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transaction Management</h2>
      <div className="space-y-4">
        <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md shadow hover:bg-green-500">
          Buy
        </button>
        <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow hover:bg-red-500">
          Sell
        </button>
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-500">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default TransactionManagementComponent;
