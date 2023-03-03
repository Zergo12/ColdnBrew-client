import "./SignupPage.css";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import authService from "../../services/auth.service";

export const signupPageAction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")
	const name = formData.get("name")
	const description = formData.get("description")

	try {
		await authService.signup({ email, password, name, description })
		return redirect("/login")
	} catch (error) {
		const {
			request: { response }
		} = error
		const { message } = JSON.parse(response)
		return message
	}
}

function SignupPage() {

  const errorMessage = useActionData()

  return (
	<div className="form-container">
		<div className="form SignupPage">
			<h1>Sign Up</h1>

			<Form action="/signup" method="POST">
				<label>Email:</label>
				<input type="email" name="email" />

				<label>Password:</label>
				<input type="password" name="password" />

				<label>Name:</label>
				<input type="text" name="name" />

				<label>About me:</label>
				<input type="text" name="description" />

				<button type="submit">Sign Up</button>
			</Form>

			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<p>Already have account?</p>
			<Link to={"/login"}> Login</Link>
		</div>
	</div>
    
  );
}

export default SignupPage;
