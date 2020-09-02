import React from "react";
import image from "../image/Code.jpg";
import profile from "../image/IMG-20181124-WA0053-01.jpeg";
import useFirestore from '../hooks/useFirestore'

const Social = ({email}) => {
  const { docs } = useFirestore(email)//change this
  console.log(docs)
  return (
    <>
      {docs && docs.map(doc => (
      <div className="social-card" key={doc.id}>
        <div className="card-header">
          <div className="dp">
            <img src={profile} alt="profile-pic" />
        </div>

        <div className="name">
          <p className="user-name">Gaurav Mishra</p>
          <p>time</p>
        </div>
      </div>

      <div className="card-image">
        <img src={doc.url} alt="flower" />
      </div>

      <div className="card-reactions">
        <p>
          {doc.caption}
        </p>
        <p>Like Share Subscribe</p>
      </div>
    </div>
    ))}
    </>
    

    
  );
};

export default Social;
