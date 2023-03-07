import { Form, redirect, useLoaderData} from 'react-router-dom';
import { editItem, getItemByID } from '../../services/items.service';
import './FormEdit.css'

export const itemDetailsLoader = async ({params:{id}}) => {
    const {data: item} = await getItemByID(id)
    return {item}
}

export const editItemAction = async ({params:{id}, request}) => { 
	const formData = await request.formData()
	const title = formData.get("title")
	const description = formData.get("description")
	const image = formData.get("image")
	const category = formData.get("category")
  await editItem (id, {title ,description, image, category})

  return redirect("/")
}


function FormEdit() {
const {item} = useLoaderData()
  return (
    <div className='form-container-container'>
        <div className="form">
          <h1>Edit your Recipe or Method</h1>

          <Form action={`/edit/${item._id}`} method="POST">
            <label>Image:</label>
            <input type="text" name="image" defaultValue={item.image} />

            <label>Title:</label>
            <input type="text" name="title" defaultValue={item.title} />

            <label>Description:</label>
            <textarea type="text" name="description" defaultValue={item.description}/>

            <label>Category:</label>
            <select type="text" name="category" defaultValue={item.category} className="form-select">
                <option value="Method">Method</option>
                <option value="Recipe">Recipe</option>
            </select>

            <button type="submit">Save</button>
          </Form>
        </div>
    </div> 
  );
}

export default FormEdit;