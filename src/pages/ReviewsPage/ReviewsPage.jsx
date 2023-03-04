import './ReviewsPage.css'
import React from 'react'
import BoxReview from '../../components/BoxReview/BoxReview'

function ReviewsPage() {
  return (
    <div className='reviewPage'>
    <h1>Reviews</h1>
        <BoxReview/>
    </div>
  )
}

export default ReviewsPage