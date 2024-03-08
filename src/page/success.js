import React from 'react'
import Check from '../assests/check.png'

const success = () => {
  return (
    <div  className="success">
        <img src={Check} alt="Check" />
        <h1>Payment Successful</h1>
        <p>Your payment has been successfully processed</p>
    </div>
  )
}

export default success
