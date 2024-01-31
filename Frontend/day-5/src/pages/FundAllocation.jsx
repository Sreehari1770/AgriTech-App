import React from 'react';
import '../assets/css/FundPage.css'; // Import CSS file
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
const FundPage = () => {
  const data = [
    { id: 1, state: 'Uttar Pradesh', fundAllocation: 12831 },
    { id: 2, state: 'Rajasthan', fundAllocation: 9015 },
    { id: 3, state: 'Maharashtra', fundAllocation: 8460 },
    { id: 4, state: 'Madhya Pradesh', fundAllocation: 7440 },
    { id: 5, state: 'Gujarat', fundAllocation: 7282 },
    { id: 6, state: 'West Bengal', fundAllocation: 7260 },
    { id: 7, state: 'Andhra Pradesh', fundAllocation: 6540 },
    { id: 8, state: 'Tamil Nadu', fundAllocation: 5990 },
  ];

  const Table = ({ data }) => {
    return (
      <table className="fund-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>State/UT</th>
            <th>Tentative Fund Allocation (Rs. Cr)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.state}</td>
              <td>{item.fundAllocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
    <NavBar/>
    <div className="fund-page">
      <h1 className="page-title">Fund-Allocation For Agriculture</h1>
      <Table data={data} />
      <Footer/>
    </div>
    </>
  );
};

export default FundPage;
