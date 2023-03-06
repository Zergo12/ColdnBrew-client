
import { Form, redirect} from 'react-router-dom';
import './FormReview.css'


// export const createReviewAction = async ({ request }) => {
// 	const formData = await request.formData()
// 	const title = formData.get("title")
// 	const description = formData.get("description")
// 	const image = formData.get("image")
// 	const category = formData.get("category")

//   console.log(title, description, image, category)
//   await createReview ({title, description, image, category})

//   return redirect("/")
// }

function FormReview() {
  return (
    // <div className='form-container'>
    //     <div className="form">
    //       <h1>Add a Review</h1>

    //       <Form action="/create" method="POST">
    //         <label>Image:</label>
    //         <input type="text" name="image" />

    //         <label>Title:</label>
    //         <input type="text" name="title" />

    //         <label>Comments:</label>
    //         <textarea type="text" name="comments"/>

    //         <label>Property:</label>
    //         <input type="text" name="property"/>

    //         <label>Quality:</label>
    //         <input type="text" name="quality"/>

    //         <label>Origin:</label>
    //         <input type="text" name="origin"/>

    //         <label>Processing:</label>
    //         <input type="text" name="processing"/>

    //         <label>Variety:</label>
    //         <input type="text" name="variety"/>
       
    //         <button type="submit">Save</button>
    //       </Form>
    //     </div>
    // </div>
   
<div className='form-container'>
  <div className="form form-left">
    <h1>Add Review</h1>

    <Form action="/create" method="POST" >
      <label>Image:</label>
      <input type="text" name="image" />

      <label>Title:</label>
      <input type="text" name="title" />

      <label>Comments:</label>
      <textarea type="text" name="comments"/>

      
    </Form>
  </div>

  <div className="form form-right">

    <Form action="/create" method="POST" >

        <label>Property:</label>
      <input type="text" name="property"/>

      <label>Quality:</label>
      <input type="text" name="quality"/>

      <label>Origin:</label>
      <input type="text" name="origin"/>

      <label>Processing:</label>
      <input type="text" name="processing"/>

      <label>Variety:</label>
      <input type="text" name="variety"/>
    </Form>
      <button type="submit" className="submit-button">Save</button>
  </div>

</div>


  );
}

export default FormReview;