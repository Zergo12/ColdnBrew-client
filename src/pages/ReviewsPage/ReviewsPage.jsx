import './ReviewsPage.css'
import React from 'react'
import BoxReview from '../../components/BoxReview/BoxReview'
import { Link, useLoaderData } from 'react-router-dom'
import { getAllReviews } from '../../services/reviews.service'

export const allReviewsLoader = async () => {
  const {data: reviews} = await getAllReviews()
  return {reviews}
}

function ReviewsPage() {
  const { reviews }= useLoaderData()
  return (
  <div className='boxes'>
  <h3>Reviews</h3>
    <div className='barraBtn'>
      <Link to={"/create-review"}>
      <button>
          Create Review
      </button>
      </Link>
    </div>
    <div className='boxReviews'>
    {reviews.map((review) => (
      <Link key={review._id} to={`/review/${review._id}`}>
          <BoxReview {...review}/>
      </Link>
    ))}
    </div>
  </div>

  )
}


export default ReviewsPage