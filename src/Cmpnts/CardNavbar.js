import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function CardNavbar() {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    navigate(`/`);
  };

  return (
    <nav>
      <div>
        <button className="btn" onClick={(e) => handleClick()}>
          Go Back
        </button>
      </div>
    </nav>
  );
}
export default CardNavbar;
