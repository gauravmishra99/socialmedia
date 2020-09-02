import React, { useState } from "react";
import Social from "./Social";
import Uploadform from "./Uploadform";
import fire from '../firebase';

const Homepage = ({ handleLogout }) => {
  const user = fire.auth().currentUser;
  var email;
  if(user!=null){
    email = user.email;
  }
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Log Out</button>
      </nav>

      <Social email={email}/>
      {isClicked && <Uploadform />}
      <button onClick={() => setIsClicked(!isClicked)} className="up-btn">
        {isClicked ? <span>-</span> : <span>+</span>}
      </button>
    </section>
  );
};

export default Homepage;
