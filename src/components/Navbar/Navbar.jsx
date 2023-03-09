import "./Navbar.css";
import { Link, useOutletContext  } from "react-router-dom";


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useOutletContext();

  return (
    <>
    <nav className="navbar">
            <div className="logo">
              <a href="/">Cold&Brew</a>
            </div>

          <ul>
            <li><a href="/brewing-methods">Methods</a></li>
            <li><a href="/recipes">Recipes</a></li>
            <li><a href="/facts">Facts</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>

          {isLoggedIn && (
            <div className="btnLoggedIn" >
              <button className="btnLogout" onClick={logOutUser}>Logout</button>

              <Link to="/profile">
              <span>{user && user.name}</span>
              </Link>
              <img src={user.picture} style={{ width: 40, height: 40, borderRadius: 25}} alt="profile" />
            </div>
          )}

          {!isLoggedIn && (
            <div className="btnLoggedOut">
              <Link to="/signup">
                {" "}
                <button>Sign Up</button>{" "}
              </Link>
              <Link to="/login">
                {" "}
                <button>Login</button>{" "}
              </Link>
            </div>
          )}

          {/* <form>
            <input type="text" name="search" placeholder="Search"/>
            <button type="submit">Search</button>
          </form> */}
        </nav>
    </>
  );
}

export default Navbar;
