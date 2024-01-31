import React, { useState } from 'react';
import '../assets/css/AdminDashboard.css';
import AdminNavBar from '../component/AdminNavBar';

const initialUsers = [
  { id: 1, username: 'admin', role: 'admin' },
  { id: 2, username: 'user1', role: 'user' },
  { id: 3, username: 'user2', role: 'user' },
];

const initialLoans = [
  { id: 1, applicant: 'John Doe', amount: 5000, status: 'pending' },
  { id: 2, applicant: 'Jane Smith', amount: 10000, status: 'approved' },
];

const AdminDashboard = () => {
  const [users, setUsers] = useState(initialUsers);
  const [loans, setLoans] = useState(initialLoans);

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const approveLoan = (loanId) => {
    setLoans(loans.map(loan => loan.id === loanId ? { ...loan, status: 'approved' } : loan));
  };

  const rejectLoan = (loanId) => {
    setLoans(loans.map(loan => loan.id === loanId ? { ...loan, status: 'rejected' } : loan));
  };

  return (
    <>
      <AdminNavBar/>
      <div className="admin-dashboard">
        <h1>Welcome-Admin!</h1>
        <div className="widgetadb">
          <div className="widget-box">
            <h3>Approved Loans</h3>
            <p>10</p>
          </div>

          <div className="widget-box">
            <h3>Pending Loans</h3>
            <p>5</p>
          </div>
          <div className="widget-box">
            <h3>Rejected Loans</h3>
            <p>7</p>
          </div>

          <div className="widget-box">
            <h3>Total Loans</h3>
            <p>22</p>
          </div>
        </div>
        <div className="section">
          <h1 className="section-header">User Management</h1>
          <table className="table user-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <h1 className="section-header">Loan Details</h1>
          <table className="table loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Applicant</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map(loan => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.applicant}</td>
                  <td>${loan.amount}</td>
                  <td>{loan.status}</td>
                  <td>
                    {loan.status === 'pending' && (
                      <>
                        <button onClick={() => approveLoan(loan.id)}>Approve</button>
                        <button onClick={() => rejectLoan(loan.id)}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
