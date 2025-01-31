import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'other',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:8080/addexpanse', 
        {
          title: formData.description,
          amount: formData.amount,
          date: formData.date
        }
      );
      if (response.data.message) {
        alert('Expense added successfully');
      } else {
        alert('Failed to add expense');
      }
    } catch (err) {
      console.log(err);
      alert('Failed to add  ghjk expense');
    }
    if (!formData.description || !formData.amount) return;
    
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    
    setFormData({
      description: '',
      amount: '',
      category: 'other',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
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
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm; 