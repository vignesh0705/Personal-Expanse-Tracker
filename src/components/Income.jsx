import React, { useState } from 'react';

function Income() {
  const [incomes, setIncomes] = useState([]);
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };
    setIncomes([...incomes, newIncome]);
    setFormData({
      source: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const deleteIncome = (id) => {
    if (window.confirm('Are you sure you want to delete this income?')) {
      setIncomes(incomes.filter(income => income.id !== id));
    }
  };

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);

  return (
    <div className="income-container">
      <h2>Income Tracker</h2>
      
      <div className="income-summary">
        <h3>Total Income</h3>
        <p className="total-income">${totalIncome.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="income-form">
        <div className="form-group">
          <input
            type="text"
            name="source"
            placeholder="Income Source"
            value={formData.source}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description (Optional)"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="add-income-btn">Add Income</button>
      </form>

      <div className="income-list">
        <h3>Income History</h3>
        {incomes.length === 0 ? (
          <p className="no-income">No income records yet.</p>
        ) : (
          incomes.map(income => (
            <div key={income.id} className="income-item">
              <div className="income-info">
                <div className="income-main">
                  <span className="income-source">{income.source}</span>
                  <span className="income-amount">${income.amount.toFixed(2)}</span>
                </div>
                <div className="income-details">
                  <span className="income-date">{income.date}</span>
                  {income.description && (
                    <span className="income-description">{income.description}</span>
                  )}
                </div>
              </div>
              <button 
                onClick={() => deleteIncome(income.id)}
                className="delete-btn"
                title="Delete Income"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Income; 