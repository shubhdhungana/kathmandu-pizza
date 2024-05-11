import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className='socialMedia'>
            {" "}
            <InstagramIcon /> {" "}
            <FacebookIcon /> {" "}
            <TwitterIcon /> {" "}
            <LinkedIn /> {" "}

        </div>
        <p>&copy; 2024 subhpizzaghar.com.np</p>
        
    </div>
  )
}

export default Footer