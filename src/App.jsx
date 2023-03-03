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
import ItemsDetail from "./pages/ItemsDetail/ItemsDetail";
import { getItemByID } from "./services/items.service";

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
				loader={getItemByID}
				element={
					<IsAnon>
					<Navbar />
					<ItemsDetail/>
					<Footer/>
					</IsAnon>
				}
			/>
      		<Route
				path="/facts"
				element={
					<IsAnon>
					<Navbar />
					<FactsPage/>
					<Footer/>
					</IsAnon>
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


