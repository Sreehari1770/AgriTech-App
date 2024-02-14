import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../component/AdminNavBar';
import '../assets/css/AddLoanPage.css';

const AddLoanPage = () => {
  const [loanDetails, setLoanDetails] = useState({
    title: '',
    description: '',
    interestRate: '',
  });
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get('http://localhost:8080/loans');
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/loans', loanDetails);
      console.log('New Loan Added:', response.data);
      setLoanDetails({
        title: '',
        description: '',
        interestRate: '',
      });
      fetchLoans(); // Refresh loan list after adding
      alert('Loan added successfully');
    } catch (error) {
      console.error('Error adding loan:', error);
      alert('Failed to add loan');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/loans/${id}`);
      fetchLoans(); // Refresh loan list after deleting
      alert('Loan deleted successfully');
    } catch (error) {
      console.error('Error deleting loan:', error);
      alert('Failed to delete loan');
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className='new-loan-container'>
        <h2>Add New Agriculture Loan</h2>
        <form onSubmit={handleSubmit} className='new-loan-form'>
          <div>
            <label>Title:</label>
            <input type='text' name='title' value={loanDetails.title} onChange={handleChange} required />
          </div>
          <div>
            <label>Description:</label>
            <textarea name='description' value={loanDetails.description} onChange={handleChange} required />
          </div>
          <div>
            <label>Interest Rate:</label>
            <input type='number' name='interestRate' value={loanDetails.interestRate} onChange={handleChange} required />
          </div>
          {/* Add more input fields as needed */}
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='loan-list'>
        <h2>My Loans</h2>
        <ul>
          {loans.map((loan) => (
            <li key={loan.id}>
              <div>
                <strong>Title: </strong> {loan.title}
              </div>
              <div>
                <strong>Description: </strong> {loan.description}
              </div>
              <div>
                <strong>Interest Rate: </strong> {loan.interestRate}%
              </div>
              <button onClick={() => handleDelete(loan.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddLoanPage;
