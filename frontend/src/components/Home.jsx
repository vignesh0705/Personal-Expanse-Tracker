import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Personal Expense Tracker</h1>
      <div className="home-content">
        <p>Track your expenses and income with ease!</p>
        <div className="home-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>
      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>Track your daily expenses</li>
          <li>Manage your income</li>
          <li>Categorize transactions</li>
          <li>View detailed reports</li>
        </ul>
      </div>
    </div>
  );
}

export default Home; 