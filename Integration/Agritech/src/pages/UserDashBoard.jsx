import React from 'react';
import CustomCard from '../component/Card'; 
import "../assets/css/UserDashBoard.css"
import Accordions from '../component/Accordions';
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
];

const UserDashBoard = () => {
  return (
    <>
    <NavBar/>
    <div className="userDash-bg">
      <div className="userDash-wel">
        <h1>Welcome - User!</h1>
        <h3>Empowering Agriculture through Financial Support</h3>
        <h5>
          In the heart of every thriving agricultural community lies the
          foundation of sustainable growth — access to reliable financial
          resources. At AgriTech, we understand the vital role that
          agriculture plays in our lives, providing nourishment and
          livelihoods around the globe. To support the backbone of our
          societies, we proudly present a comprehensive platform dedicated
          to agricultural loans.
        </h5>
      </div>
      <div className='user-dash-options'>
        <h4>Kisan Loans</h4>
        <div className="card-userdash">
            {cardData.map((card) => (
            <CustomCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
            />
            ))}
        </div>
        <h4>Schemes</h4>
        <Accordions data={accordionData} />
    </div>
      <Footer/>
    </div>
    </>
  );
};

export default UserDashBoard;
