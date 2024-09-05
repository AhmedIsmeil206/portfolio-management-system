import React from 'react';
import DashboardComponent from './components/DashboardComponent';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Financial Portfolio Management System
        </h1>
        <div className="grid grid-cols-1 gap-8">
          <DashboardComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
