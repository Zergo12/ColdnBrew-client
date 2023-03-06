import './ReviewsPage.css'
import React from 'react'
import BoxReview from '../../components/BoxReview/BoxReview'
import { Link } from 'react-router-dom'

function ReviewsPage() {
  return (
  <div className='boxes'>
  <h3>Brewing Methods</h3>
    <div className='barraBtn'>
      <Link to={"/create-review"}>
      <button>
          Create Review
      </button>
      </Link>
    </div>
    <div className=''>
          <BoxReview/>
    </div>
  </div>

  )
}


export default ReviewsPage