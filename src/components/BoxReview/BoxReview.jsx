import './BoxReview.css'
import React from 'react'
import { Link } from 'react-router-dom'

function BoxReview() {
  return (
    <div className='BoxReview'>
    <div className='container'>
          <p><strong>Review Date:</strong> May 2023</p>
      <div className='row1'>
        <div className="container1">
          <h3><strong>El Apapacho</strong></h3>
          <img src='https://s1.qwant.com/thumbr/0x380/9/6/85ae6bd805d805311b380bb08e8dffb5ed3fbd7bf82ee3cf151a9ef1509153/Apapacho_Miramar_1200x1200.png?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0365%2F9884%2F1484%2Fproducts%2FApapacho_Miramar_1200x1200.png%3Fv%3D1617741527&q=0&b=1&p=0&a=0' alt=''/>
        </div>
        <table className='table-style'>
          <tr>
            <td><strong>Variety:</strong> Arabica</td>
            <td><strong>Property:</strong> Santa Cruz</td>
            <td><strong>Rating:</strong> 100</td>
          </tr>
          <tr>
            <td><strong>Quality:</strong> Specialty</td>
            <td><strong>Origin:</strong> Chiapas</td>
            <td><strong>Processing:</strong> Washed</td>
          </tr>
        </table>

      </div>
      {/* <div className='row2'>
        <p><strong>Property:</strong> Santa Cruz</p>
        <p><strong>Quality:</strong> Specialty</p>
        <p><strong>Origin:</strong> Chiapas</p>
      </div> */}
    </div>
    <div className='row3'>
      <Link to={"/review/:id"}>See the complete review</Link>
    </div>
  </div>
  
  )
}

export default BoxReview