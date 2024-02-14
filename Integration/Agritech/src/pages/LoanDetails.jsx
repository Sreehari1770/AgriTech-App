import { useState, useEffect } from "react";
import React from 'react';
import AdminNavBar from "../component/AdminNavBar";
import axios from 'axios';

const LoanManagement = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get("http://localhost:8080/loanApplicants");
        setLoans(response.data);
      } catch (error) {
        console.error("Error fetching loans:", error);
      }
    };

    fetchLoans();
  }, []); // empty dependency array means this effect runs only once, similar to componentDidMount

  const approveLoan = async (loanId) => {
    try {
      await axios.post(`http://localhost:8080/loanApplicants/${loanId}/approve`);
      setLoans(prevLoans => prevLoans.map(loan => loan.loanId === loanId ? { ...loan, status: 'approved' } : loan));
    } catch (error) {
      console.error("Error approving loan:", error);
    }
  };

  const rejectLoan = async (loanId) => {
    try {
      await axios.post(`http://localhost:8080/loanApplicants/${loanId}/reject`);
      setLoans(prevLoans => prevLoans.map(loan => loan.loanId === loanId ? { ...loan, status: 'rejected' } : loan));
    } catch (error) {
      console.error("Error rejecting loan:", error);
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="section" style={{ marginTop: "10vh" }}>
        <h1 className="section-header">Loan Details</h1>
        <table className="table loan-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Applicant Name</th>
              <th>Applicant Address</th>
              <th>Applicant Mobile</th>
              <th>Applicant Email</th>
              <th>Applicant Aadhaar</th>
              <th>Applicant PAN</th>
              <th>Applicant Salary</th>
              <th>Loan Amount</th>
              <th>Repayment Months</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(loan => (
              <tr key={loan.loanId}>
                <td>{loan.loanId}</td>
                <td>{loan.applicantName}</td>
                <td>{loan.applicantAddress}</td>
                <td>{loan.applicantMobile}</td>
                <td>{loan.applicantEmail}</td>
                <td>{loan.applicantAadhaar}</td>
                <td>{loan.applicantPan}</td>
                <td>{loan.applicantSalary}</td>
                <td>${loan.loanAmountRequired}</td>
                <td>{loan.loanRepaymentMonths}</td>
                <td>{loan.status}</td>
                <td>
                  {loan.status === 'pending' && (
                    <>
                      <button onClick={() => approveLoan(loan.loanId)}>Approve</button>
                      <button onClick={() => rejectLoan(loan.loanId)}>Reject</button>
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
