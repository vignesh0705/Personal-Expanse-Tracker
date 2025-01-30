import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import Income from './components/Income';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/signup" 
            element={<Signup setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? (
                <div>
                  <ExpenseForm onAddExpense={addExpense} />
                  <ExpenseSummary expenses={expenses} />
                  <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route 
            path="/income" 
            element={isAuthenticated ? <Income /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/expenses" 
            element={
              isAuthenticated ? (
                <div>
                  <ExpenseForm onAddExpense={addExpense} />
                  <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 