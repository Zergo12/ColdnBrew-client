
import { Form, redirect} from 'react-router-dom';
import { createReview } from '../../services/reviews.service';
import './FormReview.css'


export const createReviewAction = async ({ request }) => {
	const formData = await request.formData()
	const title = formData.get("title")
	const comments = formData.get("comments")
	const image = formData.get("image")
	const rating = formData.get("rating")
	const origin = formData.get("origin")
	const quality = formData.get("quality")
	const producer = formData.get("producer")
	const process = formData.get("process")
	const varietal = formData.get("varietal")

  await createReview ({title, comments, image, rating, origin ,quality, producer, process, varietal})

  return redirect("/reviews")
}

function FormReview() {
  return (
    <div className='form-container'>
        <div className="form">
          <h1>Add a Review</h1>

          <Form action="/review/create" method="POST" >
            <label>Image:</label>
            <input type="text" name="image" />

            <label>Rating:</label>
            <input type="number" name="rating" min={0} max={5}/>

            <label>Title:</label>
            <input type="text" name="title" />

            <label>Comments:</label>
            <textarea type="text" name="comments"/>

            <label>Producer:</label>
            <input type="text" name="producer"/>

            <label>Quality:</label>
            <input type="text" name="quality"/>

            <label>Origin:</label>
            <input type="text" name="origin"/>

            <label>Process:</label>
            <input type="text" name="process"/>

            <label>Varietal:</label>
            <input type="text" name="varietal"/>
       
            <button type="submit">Save</button>
          </Form>
        </div>
    </div>

  );
}

export default FormReview;