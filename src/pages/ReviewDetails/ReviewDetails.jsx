import { Link, useLoaderData } from 'react-router-dom'
import { getReviewByID } from '../../services/reviews.service'
import './ReviewDetails.css'


export const reviewDetailsLoader = async({params:{ id }}) => { 
    const {data: review} = await getReviewByID(id)
    return {review}
  }


  function ReviewDetails() {
    const {review} = useLoaderData()
    const grade = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
    const starsFunction= grade(review.rating)
    return (
      <div className='reviewDetails'>
        <div className='reviewImg'>
          <img src={review.image} alt={review.title}/>
        </div>
        <div className='reviewTxt'>
          <h3>{review.title}</h3>
          <p><strong>Rating:</strong> {starsFunction}</p>
          {/* <p>{review.description}</p> */}
          <p><strong>Producer:</strong> {review.producer}</p>
          <p><strong>Quality:</strong> {review.quality}</p>
          <p><strong>Origin:</strong> {review.origin}</p>
          <p><strong>Process:</strong> {review.process}</p>
          <p><strong>Varietal:</strong> {review.varietal}</p>
          <div className='comments'>
          <p>{review.comments}</p>
          </div>
        </div>
        {/* <div className="buttons">
           <Link to={`/edit/${review._id}`}>
          <button className="editButton">Edit</button>
          </Link> 
          {<Form action={`/delete/${review._id}`} method='POST'>
            <button type="submit" className="deleteButton">Delete</button>
          </Form> 
        </div> */}
      </div>
    )
  }
  
  export default ReviewDetails