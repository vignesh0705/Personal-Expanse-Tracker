import React from 'react';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <div className="summary-details">
        <div className="total-section">
          <h3>{currentMonth} {currentYear}</h3>
          <p className="total-amount">
            Total Expenses: <span>${total.toFixed(2)}</span>
          </p>
        </div>
        
        <div className="category-breakdown">
          <h3>Category Breakdown</h3>
          <div className="category-totals">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <div key={category} className="category-item">
                <span className="category-name">{category}</span>
                <span className="category-amount">${amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary; 