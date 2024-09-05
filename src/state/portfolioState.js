import { useState } from 'react';

const usePortfolioState = () => {
  const [portfolios, setPortfolios] = useState([]);

  const addPortfolio = (portfolio) => {
    setPortfolios([...portfolios, portfolio]);
  };

  const editPortfolio = (id, updatedPortfolio) => {
    setPortfolios(portfolios.map(portfolio => portfolio.id === id ? updatedPortfolio : portfolio));
  };

  const deletePortfolio = (id) => {
    setPortfolios(portfolios.filter(portfolio => portfolio.id !== id));
  };

  return {
    portfolios,
    addPortfolio,
    editPortfolio,
    deletePortfolio
  };
};

export default usePortfolioState;
