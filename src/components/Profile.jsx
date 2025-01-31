

import "./Profile.css"



export const Profile = ({ currentUser }) => {
  return (
    <>
      <div className="user-info">
        <div className="user-name"> {currentUser.name}</div>
        <div className="user-email">{currentUser.email}</div>
        <div className="user-verse">{currentUser.verse}</div>
      </div>
    </>
  );
};
