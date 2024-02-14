import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/LoanAppPage.css';
import NavBar from '../component/NavBar';

const LoanAppPage = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    applicantAadhaar: '',
    applicantPan: '',
    applicantSalary: '',
    loanAmountRequired: '',
    loanRepaymentMonths: '',
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

  const handleApplyLoan = async (e) => {
    e.preventDefault();
    try {
      const newLoanId = generateLoanId();
      setLoanId(newLoanId);
      setShowPopup(true);

      // Send POST request to save the form data
      await axios.post('http://localhost:8080/loanApplicants', formData);

      // Clear the form after successful submission
      setFormData({
        loanType: '',
        applicantName: '',
        applicantAddress: '',
        applicantMobile: '',
        applicantEmail: '',
        applicantAadhaar: '',
        applicantPan: '',
        applicantSalary: '',
        loanAmountRequired: '',
        loanRepaymentMonths: ''
      });
    } catch (error) {
      console.error('Error applying for loan:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <NavBar />
      <div className='loanApp'>
        <div className="loan-application-container">
          <h2>Apply for Agriculture Loan</h2>
          <form onSubmit={handleApplyLoan}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} />
            </div>
            {/* <div className="form-group">
              <label>Age:</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </div> */}
            <div className="form-group">
              <label>Address:</label>
              <textarea name="applicantAddress" value={formData.applicantAddress} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="applicantMobile" value={formData.applicantMobile} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Loan For:</label>
              <input type="text" name="loanType" value={formData.loanType} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Loan Amount:</label>
              <input type="number" name="loanAmountRequired" value={formData.loanAmountRequired} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Loan Repayment Months:</label>
              <input type="number" name="loanRepaymentMonths" value={formData.loanRepaymentMonths} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Your Salary:</label>
              <input type="number" name="applicantSalary" value={formData.applicantSalary} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Aadhar Number:</label>
              <input type="text" name="applicantAadhaar" value={formData.applicantAadhaar} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>PAN Number:</label>
              <input type="text" name="applicantPan" value={formData.applicantPan} onChange={handleChange} />
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
