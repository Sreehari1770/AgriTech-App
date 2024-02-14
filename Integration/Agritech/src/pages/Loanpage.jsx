import React, { useState } from 'react';
import CustomCard from '../component/Card';
import "../assets/css/LoanPage.css";
import Footer from '../component/Footer';
import Tractorimg from '../assets/images/Tractor.jpg';
import SmallFarmimg from '../assets/images/SmallFarm.jpg';
import Horticultureimg from '../assets/images/Horticulture.jpg';
import HenImg from '../assets/images/hensfarm.jpg';
import NavBar from '../component/NavBar';
import axios from 'axios'; // Import Axios for making HTTP requests

const cardData = [
  {
    id: 1,
    title: 'Small Agri Business Loan',
    description: 'Loan For Small Agri Business',
    imageUrl: SmallFarmimg,
  },
  {
    id: 2,
    title: 'Apply For Tractor Loan',
    description: 'Tractor Loan',
    imageUrl: Tractorimg,
  },
  {
    id: 3,
    title: 'Horticulture Loans',
    description: 'Horticulture Loan',
    imageUrl: Horticultureimg,
  },
  {
    id: 4,
    title: 'Allied Activities Loans',
    description: 'Loan for Allied Activities',
    imageUrl: HenImg,
  },
];

function LoanPage() {
    const [loanDetails, setLoanDetails] = useState(null);
    const [loanId, setLoanId] = useState('');

    const handleSearch = () => {
        axios.get(`http://localhost:8080/loanApplicants/${loanId}`)
            .then(response => {
                setLoanDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching loan details:', error);
            });
    };

    return ( 
        <>
        <NavBar/>
        <div className='loan-options'>
        <h4>Kisan Loans</h4>
        <div className="card-loan">
            {cardData.map((card) => (
            <CustomCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
            />
            ))}
        </div>
        <h3>Check Your Loan Status</h3>
        <div className="search-bar">
          <label htmlFor="loanId">Enter your Loan Id:</label>
          <input 
            type="text" 
            id="loanId" 
            name="loanId" 
            value={loanId}
            onChange={(e) => setLoanId(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        {loanDetails && (
            <div className="loan-details" data-status={loanDetails.status}>
                <h4>Loan Details</h4>
                <p>Loan ID: {loanDetails.loanId}</p>
                <p>Loan Type: {loanDetails.loanType}</p>
                <p>Applicant Name: {loanDetails.applicantName}</p>
                <p>Applicant Address: {loanDetails.applicantAddress}</p>
                <p>Applicant Mobile: {loanDetails.applicantMobile}</p>
                <p>Applicant Email: {loanDetails.applicantEmail}</p>
                <p>Applicant Aadhaar: {loanDetails.applicantAadhaar}</p>
                <p>Applicant Pan: {loanDetails.applicantPan}</p>
                <p>Applicant Salary: {loanDetails.applicantSalary}</p>
                <p>Loan Amount Required: {loanDetails.loanAmountRequired}</p>
                <p>Loan Repayment Months: {loanDetails.loanRepaymentMonths}</p>
                <p>Status: {loanDetails.status}</p>
            </div>
        )}
        </div>
        <Footer/>
        </>
     );
}

export default LoanPage;
