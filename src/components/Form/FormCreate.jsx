
import { Form, redirect} from 'react-router-dom';
import { createItem } from '../../services/items.service';
import './FormCreate.css'


export const createItemAction = async ({ request }) => {
	const formData = await request.formData()
	const title = formData.get("title")
	const description = formData.get("description")
	const image = formData.get("image")
	const category = formData.get("category")

  console.log(title, description, image, category)
  await createItem ({title, description, image, category})

  return redirect("/")
}
function FormCreate() {
  return (
    <div className='form-container'>
        <div className="form">
          <h1>Add a Recipe or a Method!</h1>

          <Form action="/create" method="POST">
            <label>Image:</label>
            <input type="text" name="image" />

            <label>Title:</label>
            <input type="text" name="title" />

            <label>Description:</label>
            <textarea type="text" name="description"/>

            <label>Category:</label>
            <select type="text" name="category"   className="form-select">
                <option value=""></option>
                <option value="Method">Method</option>
                <option value="Recipe">Recipe</option>
            </select>

            <button type="submit">Save</button>
          </Form>
        </div>
    </div>
   
   
  );
}

export default FormCreate;