import { useOutletContext } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const { user } = useOutletContext();
  return (
    <div className="profile-container">
    <div className="profileHeader">
      <img className="img" src="/cup.png" alt="cup"/>
      <h1>Hello {user.name}!</h1> 
      <img className="img" src="/coffee-machine.png" alt="coffee machine"/>
    </div>
    <img className="imgProfile" src="https://static-00.iconduck.com/assets.00/user-avatar-glad-icon-256x255-cbmmpmut.png" alt="Profile Picture"/>
    <div className="profileDescription">
      <p>{user.description} </p>
    </div>
    <button className="editProfileButton">Edit Profile</button>
    <div className="extraContent" >
    
    </div>
  </div>
  
  );
}

export default ProfilePage;
