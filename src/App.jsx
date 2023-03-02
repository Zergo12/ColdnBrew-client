import "./App.css";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
// Pages
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BrewingMethodsPage from "./pages/BrewingMethodsPage/BrewingMethodsPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FactsPage from "./pages/FactsPage/FactsPage";

// Components
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/brewing-methods"
          element={
            <IsAnon>
              <BrewingMethodsPage/>
            </IsAnon>
          }
        />
        <Route
          path="/recipes"
          element={
            <IsAnon>
              <RecipesPage/>
            </IsAnon>
          }
        />
        <Route
            path="/facts"
            element={
              <IsAnon>
                  <FactsPage/>
              </IsAnon>
            }
          />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
