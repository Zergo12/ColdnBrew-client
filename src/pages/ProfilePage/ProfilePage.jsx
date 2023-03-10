import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import { getProfileByID } from "../../services/profile.service";
import "./ProfilePage.css";

export const profileDetailsLoader = async ({params:{id}}) => {
  const {data: user} = await getProfileByID(id)
  return {user}
}

function ProfilePage() {
  const { user } = useOutletContext();
  return (
    <div className="profile-container">
    <div className="profileHeader">
      {/* <img className="img" src="/cup.png" alt="cup"/> */}
      <h1>Hello {user.name}!</h1> 
      {/* <img className="img" src="/coffee-machine.png" alt="coffee machine"/> */}
    </div>
    <img className="imgProfile" src={user.picture} alt="Profile Picture"/>
    <div className="profileDescription">
      <p>{user.description}</p>
    </div>
    <Link to={`/editProfile/${user._id}`}>
      <button className="editProfileButton">Edit Profile</button>
    </Link>
    <div className="extraContent" >
    
    </div>
  </div>
  
  );
}

export default ProfilePage;
