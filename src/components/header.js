import React, { useState } from 'react'
import Arrow  from '../assests/arrow.png'
import './header.css'

const Header = () => {
  const[modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="container">
        <button className='button'><img src={Arrow} alt=''/></button>
       <div className='topic'>
        <h2>Buy Airtime</h2>
        <p>Buy airtime within seconds </p>
        
        <div className='details'>
            <div className='form'>
                
                <label className='label'>Select Network Type</label><br/>
                <select style={{width: '120px'}} name='networkType'>
                    <option value='Safaricom'>Safaricom</option>
                    <option value='airtel'>Airtel</option>
                    <option value='Telkom'>Telkom</option>
                </select><br/><br/>
                <label className='label'>Enter Phone Number</label><br/>
                <input type='text' style={{width: '120px'}}/><br/><br/>
                <label className='label'>Enter Amount</label><br/>
                <input type='number' style={{width: '120px'}}/><br/><br/>
                <button className='submit' onClick={toggleModal}>Buy Airtime</button>
                
                <div className='modal'>
                <div className='overlay'>
                  <div className='modal-content'>
                    <h2>Transaction Successful</h2>
                    <p>Your airtime has been sent successfully</p>
                    <button className='close' onClick={toggleModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
   
  );
}

export default Header;
