import { useState } from "react";
import React  from 'react';
import AdminNavBar from "../component/AdminNavBar";

const initialLoans = [
    { id: 1, applicant: 'John Doe', amount: 5000, status: 'pending' },
    { id: 2, applicant: 'Jane Smith', amount: 10000, status: 'approved' },
  ];
const LoanManagement = () => {
    const [loans, setLoans] = useState(initialLoans);
    const approveLoan = (loanId) => {
        setLoans(loans.map(loan => loan.id === loanId ? { ...loan, status: 'approved' } : loan));
      };
    
      const rejectLoan = (loanId) => {
        setLoans(loans.map(loan => loan.id === loanId ? { ...loan, status: 'rejected' } : loan));
      };
  return (
    <>
    <AdminNavBar/>
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
    </>
  );
};

export default LoanManagement;
