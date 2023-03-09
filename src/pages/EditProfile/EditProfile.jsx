import { Form, redirect, useOutletContext} from 'react-router-dom';
import { editProfile } from '../../services/profile.service';



export const editProfileAction = async ({params:{id}, request}) => { 
	const formData = await request.formData()
	const description = formData.get("description")
	const picture = formData.get("picture")

  await editProfile (id, {description, picture})

  return redirect("/profile")
}


function FormEditProfile() {
const { user } = useOutletContext();
  return (
    <div className='form-container-container'>
        <div className="form">
          <h1>Edit your Profile</h1>

          <Form action={`/editProfile/${user._id}`} method="POST">
            <label>Image:</label>
            <input type="text" name="picture" defaultValue={user.picture} />

            <label>Description:</label>
            <textarea type="text" name="description" defaultValue={user.description}/>

            <button type="submit">Save</button>
          </Form>
        </div>
    </div> 
  );
}

export default FormEditProfile;