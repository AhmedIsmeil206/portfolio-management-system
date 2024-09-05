import React, { useState } from 'react';
import PortfolioManagement from './PortfolioManagementComponent';
import TransactionForm from '../forms/TransactionForm';

const DashboardComponent = () => {
  const [activeView, setActiveView] = useState('portfolio');

  const handlePortfolioView = () => setActiveView('portfolio');
  const handleTransactionView = () => setActiveView('transaction');

  const renderContent = () => {
    switch (activeView) {
      case 'portfolio':
        return <PortfolioManagement />;
      case 'transaction':
        return <TransactionForm />;
      default:
        return <PortfolioManagement />;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Portfolio Management</h2>
        <button
          onClick={handlePortfolioView}
          className="w-full py-2 mb-2 bg-purple-600 text-white rounded-md hover:bg-purple-500"
        >
          Manage Portfolios
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Transaction Management</h2>
        <button
          onClick={handleTransactionView}
          className="w-full py-2 mb-2 bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          Manage Transactions
        </button>
      </div>

      <div className="col-span-2 mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardComponent;
