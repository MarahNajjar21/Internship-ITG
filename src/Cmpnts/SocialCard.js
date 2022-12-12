import "./SocialCard.css";
import Email from "./Email";
import { useNavigate } from "react-router-dom";

const SocialCard = ({ userData }) => {
  const navigate=useNavigate(); 
  
  let userId;
  const handleClick =async (event) => {
    userId = userData.id;
    /*alert(userId);*/
    const a =localStorage.setItem('ID',userId); 
    //navigate('/Hero'); 
    navigate(`/Hero/${userId}`); 
    //<Route path='about' element={<Hero/>}></Route>
  };

  return (
    <div>
    <button className="card" onClick={(e)=>handleClick()}>
      <Email email={userData.email} />

      <div className="card__username">{userData.username}</div>
      
      <div className="card__body">
        <div>Email:{userData.email} </div>
        <div>Birthdate:{userData.birthDate}</div>
        <div>Gender:{userData.gender}</div>
        <div className="card__image">
          <img src={userData.image} />
        </div>
      </div>
    </button>
    </div>
  );
};

export default SocialCard;