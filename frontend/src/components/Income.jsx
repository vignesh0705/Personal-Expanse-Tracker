import React, { useState } from 'react';

function Income() {
  const [incomes, setIncomes] = useState([]);
  const [formData, setFormData] = useState({
    source: '',
    amount: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncomes([...incomes, { ...formData, id: Date.now() }]);
    setFormData({ source: '', amount: '', date: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  return (
    <div className="income-container">
      <h2>Income Tracker</h2>
      <form onSubmit={handleSubmit} className="income-form">
        <input
          type="text"
          name="source"
          placeholder="Income Source"
          value={formData.source}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Income</button>
      </form>

      <div className="income-list">
        {incomes.map(income => (
          <div key={income.id} className="income-item">
            <div className="income-info">
              <span>{income.source}</span>
              <span>${income.amount}</span>
              <span>{income.date}</span>
            </div>
            <button onClick={() => deleteIncome(income.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Income; 