import React from 'react'
import './Orders.css'
import LayOut from '../../Components/LayOut/LayOut'
import logo from '../../assets/Amazon_Logo_PNG_-_Free_Download-removebg-preview.png'

function Orders() {
  return (
    <LayOut>
      <div className="container">
      <div className="content-wrapper">
        <img src={logo} alt="" className='logo'/>
        
        <div className="form-container">
          <h2 className="sign-in-title">Sign in</h2>
          
          <label className="label">Email or mobile phone number</label>
          <input className="input" type="email" />
          
          <button className="continue-button">Continue</button>
          
          <p className="agreement-text">
            By continuing, you agree to Amazon's <a href="#" className="link">Conditions of Use</a> and{' '}
            <a href="#" className="link">Privacy Notice</a>.
          </p>
          
          <a href="#" className="help-link">Need help?</a>
        </div>

        <div className="divider">
          <hr className="hr-style" /> 
          <span className="divider-text">New to Amazon?</span>
          <hr className="hr-style" />
        </div>

        <button className="create-account-button">Create your Amazon account</button>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-link">Conditions of Use</a>
          <a href="#" className="footer-link">Privacy Notice</a>
          <a href="#" className="footer-link">Help</a>
        </div>
        <p className="copyright-text">1996-2025, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>  
    </LayOut>
    
  )
}

export default Orders
