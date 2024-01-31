import React from 'react'
import CustomCard from '../component/Card';
import "../assets/css/LoanPage.css"
import Footer from '../component/Footer';
import Tractorimg from '../assets/images/Tractor.jpg'
import SmallFarmimg from '../assets/images/SmallFarm.jpg'
import Horticultureimg from '../assets/images/Horticulture.jpg'
import HenImg from '../assets/images/hensfarm.jpg'
import NavBar from '../component/NavBar';
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
          <input type="text" id="loanId" name="loanId" />
          <button type="button">Search</button>
        </div>
        </div>
        <Footer/>
        </>
     );
}

export default LoanPage;