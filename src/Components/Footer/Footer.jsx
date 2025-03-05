import React from 'react';
import './Footer.css';
import Logo from '../../assets/LEGO_SNOT_Basics__Geometry__Techniques_and_Pitfalls_-_BrickNerd_-_All_things_LEGO_and_the_LEGO_fan_community__1_-removebg-preview.png';
import visaLogo from '../../assets/Visa_irá_adquirir_a_Pismo-removebg-preview.png';
import mastercardLogo from '../../assets/9_of_the_Most_Beautiful_Brand_Identities_in_Banking-removebg-preview.png';
import amexLogo from '../../assets/American_Express_Logo_PNG_Vector__EPS__Free_Download-removebg-preview.png';

const Footer = () => {
  const footerSections = [
    {
      title: "Get to Know Us",
      links: [
        "About Us", "Careers", "Press Releases", "Amazon Science",
        "Blog", "Investor Relations", "Amazon Devices", "Amazon Tours"
      ]
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell on Amazon", "Sell under Amazon Accelerator", "Protect and Build Your Brand",
        "Amazon Global Selling", "Become an Affiliate", "Fulfilment by Amazon",
        "Advertise Your Products", "Amazon Pay on Merchants"
      ]
    },
    {
      title: "Amazon Payment Products",
      links: [
        "Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"
      ]
    },
    {
      title: "Let Us Help You",
      links: [
        "COVID-19 and Amazon", "Your Account", "Your Orders", "Shipping Rates & Policies",
        "Returns & Replacements", "Manage Your Content and Devices", "Amazon Assistant", "Help"
      ]
    }
  ];

  return (
    <div className="footer-container">
      <div className="back-to-top">
        <a href="#">Back to top</a>
      </div>
      <div className="footer-content">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-language">
          <img src={Logo} alt="Amazon logo" className="amazon-logo" />
          <select>
            <option>English</option>
          </select>
          <div className="country-selector">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="USA flag" className="flag-icon" />
            <span>United States</span>
          </div>
        </div>
        <div className="footer-links">
          {['Conditions of Use', 'Privacy Notice', 'Your Ads Privacy Choices'].map((text, index) => (
            <a key={index} href="#">{text}</a>
          ))}
        </div>
        <div className="footer-copyright">
          <p>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</p>
          <div className="payment-methods">
           <div>
           <img src={visaLogo} alt="visaLogo" className="payment-icon"/>
            <img src={mastercardLogo} alt="mastercardLogo" className="payment-icon"/>
            <img src={amexLogo} alt="amexLogo" className="payment-icon"/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
