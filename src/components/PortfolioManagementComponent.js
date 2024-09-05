import React, { useState } from 'react';

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioName, setPortfolioName] = useState('');
  const [description, setDescription] = useState('');
  const [riskLevel, setRiskLevel] = useState('');
  const [editIndex, setEditIndex] = useState(null); // For editing a portfolio

  // Handle form submission for creating or editing a portfolio
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPortfolio = { portfolioName, description, riskLevel };

    if (editIndex !== null) {
      // Edit existing portfolio
      const updatedPortfolios = portfolios.map((p, index) => 
        index === editIndex ? newPortfolio : p
      );
      setPortfolios(updatedPortfolios);
      setEditIndex(null);
    } else {
      // Add new portfolio
      setPortfolios([...portfolios, newPortfolio]);
    }

    // Clear form fields
    setPortfolioName('');
    setDescription('');
    setRiskLevel('');
  };

  // Handle deleting a portfolio
  const handleDelete = (index) => {
    const updatedPortfolios = portfolios.filter((_, i) => i !== index);
    setPortfolios(updatedPortfolios);
  };

  // Handle editing a portfolio
  const handleEdit = (index) => {
    const portfolioToEdit = portfolios[index];
    setPortfolioName(portfolioToEdit.portfolioName);
    setDescription(portfolioToEdit.description);
    setRiskLevel(portfolioToEdit.riskLevel);
    setEditIndex(index);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{editIndex !== null ? 'Edit Portfolio' : 'Create Portfolio'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Portfolio Name</label>
          <input 
            type="text" 
            className="w-full border rounded-md p-2" 
            value={portfolioName} 
            onChange={(e) => setPortfolioName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea 
            className="w-full border rounded-md p-2" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Risk Level</label>
          <input 
            type="text" 
            className="w-full border rounded-md p-2" 
            value={riskLevel} 
            onChange={(e) => setRiskLevel(e.target.value)} 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500">
          {editIndex !== null ? 'Update Portfolio' : 'Create Portfolio'}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Existing Portfolios</h2>
      {portfolios.length === 0 ? (
        <p>No portfolios available</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {portfolios.map((portfolio, index) => (
            <li key={index} className="p-4 border rounded-md shadow-sm flex justify-between">
              <div>
                <h3 className="font-semibold">{portfolio.portfolioName}</h3>
                <p>{portfolio.description}</p>
                <p>Risk Level: {portfolio.riskLevel}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEdit(index)} 
                  className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-400"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(index)} 
                  className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PortfolioManagement;
