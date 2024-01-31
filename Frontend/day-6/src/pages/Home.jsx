import '../assets/css/Home.css'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
function Home() {
    return (
        <>
        <NavBar/>
        <div className="bg-home">
            <div className="center-home">
                <h1 className='wel-text'>Welcome To AgriTech </h1>
                <h3 className='wel-text-1'>Empowering Agriculture through Financial Support</h3>
                <p className='wel-text-1'>In the heart of every thriving agricultural community lies the foundation 
                    of sustainable growth — access to reliable financial resources. At AgriTech, we 
                    understand the vital role that agriculture plays in our lives, providing nourishment and livelihoods around the globe.
                    To support the backbone of our societies, we proudly present a comprehensive platform dedicated to agricultural loans.</p>
                    <Link to="/login"><Button variant="outlined"  className='btn-home'>GET LOAN</Button></Link>
                    
            </div>
        </div>
        <Footer/>
        </>
     );
}

export default Home;