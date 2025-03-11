# Personal Expense Tracker

## Overview
The **Personal Expense Tracker** is a web-based application designed to help users track their daily expenses and manage their budget efficiently. With an intuitive user interface, users can log transactions, categorize expenses, and visualize their spending habits.

## Features
- User authentication (signup/login)
- Add, edit, and delete expenses
- Categorize expenses (food, transport, shopping, etc.)
- View expense history
- Generate reports and visual analytics
- Monthly budgeting
- Export data as CSV

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Charts & Graphs:** Chart.js

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Personal-Expense-Tracker.git
   cd Personal-Expense-Tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the backend server:
   ```bash
   npm run server
   ```
5. Start the frontend:
   ```bash
   npm start
   ```
6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## API Endpoints
### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user and get a token

### Expenses
- `GET /api/expenses` - Get all user expenses
- `POST /api/expenses` - Add a new expense
- `PUT /api/expenses/:id` - Update an expense
- `DELETE /api/expenses/:id` - Delete an expense

## Contribution
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, feel free to reach out:
- GitHub: [vignesd0705](https://github.com/your-username)
- Email: vigneshvarpandi@gmail.com

