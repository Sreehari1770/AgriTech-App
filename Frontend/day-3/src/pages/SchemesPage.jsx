import React from 'react'
import Accordions from '../component/Accordions';
import '../assets/css/SchemesPage.css'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
const accordionData = [
  {
    title: 'Retail Agri Loan - Loan For Farmers',
    content: '<h5>Overview</h5><br/><p>Kisan Gold Card is finance to farmers for specified sum of money, towards his farm requirements like production of crop, post-harvest, repair & maintenance and consumption need of the farmer. Funding is also done for purchase of farm machinery, implements, irrigation equipment and construction of storage structures etc..</p> <br/><h5>Eligibility:</h5><br/><p>Individual farmer/ Joint borrower. All major applicant  up to age of 60 years, above 60 years legal heir is mandatory.</p>',
  },
  {
    title: 'Tractor Loan',
    content: '<h5>Tractor Loan Eligibility</h5><br/><p>Minimum Annual Income : ₹ 1 lakh (for Farmers) & ₹ 1.5 lakhs (for Commercial segment) Minimum age - 18 years Maximum age - 60 years</p>',
  },
  {
    title: 'Farm Credit - Small Agri Business Loan Online',
    content: '<h5>Overview</h5><br/><p>AgriTech offers Working Capital Solutions for Agri Traders, Arathiyas, Food processing firms, Agri Exporters etc.,which is a tailor made product to suit their business requirement and providing them with the credit with anytime, anywhere banking!</p><br/><h5>Eligibility</h5><br/><p>Business vintage : 5 Years (min 3 years at the same location)</p>',
  },

  {
    title: 'Accordion 4',
    content: 'Content for <strong>Accordion 4</strong>',
  },
  {
    title: 'Accordion 5',
    content: 'Content for <strong>Accordion 5</strong>',
  },
];

function SchemesPage() {
  return (
    <>
      <NavBar />
      <div className='scheme-page'>
        <h4>Schemes</h4>
        <Accordions data={accordionData} />
      </div>
      <Footer />
    </>
  );
}

export default SchemesPage;