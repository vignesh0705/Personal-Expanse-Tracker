import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Recent Expenses</h2>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses recorded yet.</p>
      ) : (
        expenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <span className="description">{expense.description}</span>
              <span className="amount">${expense.amount.toFixed(2)}</span>
              <span className="category">{expense.category}</span>
              <span className="date">{expense.date}</span>
            </div>
            <button 
              onClick={() => onDeleteExpense(expense.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList; 