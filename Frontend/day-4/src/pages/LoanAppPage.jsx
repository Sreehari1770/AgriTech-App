import React, { useState } from 'react';
import '../assets/css/LoanAppPage.css';
import NavBar from '../component/NavBar';

const LoanAppPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phoneNumber: '',
    loanFor: '',
    loanAmount: '',
    aadharCardFile: null,
    kycFile: null
  });
  const [showPopup, setShowPopup] = useState(false);
  const [loanId, setLoanId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const generateLoanId = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
  };

  const handleApplyLoan = (e) => {
    e.preventDefault();
    const newLoanId = generateLoanId();
    setLoanId(newLoanId);
    setShowPopup(true);
    // Logic to handle form submission, including file uploads
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <NavBar/>
    <div className='loanApp'>
      <div className="loan-application-container">
        <h2>Apply for Agriculture Loan</h2>
        <form onSubmit={handleApplyLoan}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Loan For:</label>
            <input type="text" name="loanFor" value={formData.loanFor} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Loan Amount:</label>
            <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Aadhar Card:</label>
            <input type="file" name="aadharCardFile" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label>KYC Document:</label>
            <input type="file" name="kycFile" onChange={handleFileChange} />
          </div>
          <button type="submit">Apply Loan</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p>You have applied for a loan successfully!</p>
            <p>Your Loan ID: {loanId}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default LoanAppPage;
