import "./App.css";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage, { signupPageAction } from "./pages/SignupPage/SignupPage";
import LoginPage, { loginPageAction } from "./pages/LoginPage/LoginPage";
import BrewingMethodsPage, { allItemsLoader } from "./pages/BrewingMethodsPage/BrewingMethodsPage";
import RecipesPage, { allRecipesLoader } from "./pages/RecipesPage/RecipesPage";
import FactsPage from "./pages/FactsPage/FactsPage";

// Components
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import FormCreate, { createItemAction } from "./components/Form/FormCreate";

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom"
import Root from "./pages/Root/Root"
import ItemsDetail, { deleteItemAction, itemDetailsLoader } from "./pages/ItemsDetail/ItemsDetail";
import FormEdit, { editItemAction } from "./components/FormEdit/FormEdit";
import ReviewsPage, { allReviewsLoader } from "./pages/ReviewsPage/ReviewsPage";
import FormReview, { createReviewAction } from "./components/FormReview/FormReview";
import ReviewDetails, { reviewDetailsLoader } from "./pages/ReviewDetails/ReviewDetails";


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Root />}>
			<Route
				path="/"
				element={
					<>
					<Navbar />
					<HomePage />
					<Footer/>
					</>
				}
			/>

			<Route
				path="/profile"
				element={
					<IsPrivate>
					<Navbar />
					<ProfilePage />
					<Footer/>
					</IsPrivate>
				}
			/>

			<Route
				path="/create"
				action={createItemAction}
				element={
					<IsPrivate>
					<Navbar />
					<FormCreate/>
					<Footer/>
					</IsPrivate>
					}
			/>

			<Route
				path="/signup"
				action={signupPageAction}
				element={
					<IsAnon>
					<Navbar />
					<SignupPage />
					<Footer/>
					</IsAnon>
				}
			/>
			<Route
				path="/brewing-methods"
				action={createItemAction}
				loader={allItemsLoader}
				element={
					<IsPrivate>
					<Navbar />
					<BrewingMethodsPage/>
					<Footer/>
					</IsPrivate>
				}
				/>
			<Route
				path="/recipes"
        		loader={allRecipesLoader}
				element={
					<IsPrivate>
					<Navbar />
					<RecipesPage/>
					<Footer/>
					</IsPrivate>
				}
			/>
			<Route
				path="/:id"
				loader={itemDetailsLoader}
				element={
					<IsPrivate>
					<Navbar />
					<ItemsDetail/>
					<Footer/>
					</IsPrivate>
				}
			/>
			<Route
				path="/delete/:id"
				action={deleteItemAction}
				element={
					<IsPrivate>
					<Navbar />
					<ItemsDetail/>
					<Footer/>
					</IsPrivate>
				}
			/>
			<Route
				path="/edit/:id"
				loader={itemDetailsLoader}
				action={editItemAction}
				element={
					<IsPrivate>
					<Navbar />
					<FormEdit/>
					<Footer/>
					</IsPrivate>
				}
			/>
      		<Route
				path="/facts"
				element={
					<IsPrivate>
					<Navbar />
					<FactsPage/>
					<Footer/>
					</IsPrivate>
				}
			/>
				<Route
				path="/reviews"
				loader={allReviewsLoader}
				element={
					<IsPrivate>
					<Navbar />
					<ReviewsPage/>
					<Footer/>
					</IsPrivate>
				}
			/>
				<Route
				path="/create-review"
				element={
					<IsPrivate>
					<Navbar />
					<FormReview/>
					<Footer/>
					</IsPrivate>
				}
			/>
			<Route
				path="/review/:id"
				loader={reviewDetailsLoader}
				element={
					<IsPrivate>
					<Navbar />
					<ReviewDetails/>
					<Footer/>
					</IsPrivate>
				}
			/>
			<Route
				path="/review/create"
				action={createReviewAction}
				element={
					<IsPrivate>
					<Navbar />
					<FormReview/>
					<Footer/>
					</IsPrivate>
					}
			/>
			<Route
				path="/login"
				action={loginPageAction}
				element={
					<IsAnon>
					<Navbar />
					<LoginPage />
					<Footer/>
					</IsAnon>
				}
			/>
		</Route>
    
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App


