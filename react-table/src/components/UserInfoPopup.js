import React from "react";
import "./popup.css";

const UserInfoPopup = ({ user, handleToggle }) => {
  const renderUser = (user) => {
    return (
      <div key={user.id} className="popup-box">
        <div className="box">
          <div className="ui list">
            <div className="item">
              <div className="ui horizontal label">Id</div>
              {user.id}
            </div>
            <div className="item">
              <div className="ui horizontal label">Name</div>
              {user.name}
            </div>
            <div className="item">
              <div className="ui horizontal label">Email ID</div>
              {user.email}
            </div>
            <div className="item">
              <div className="ui horizontal label">Phone</div>
              {user.phone}
            </div>
            <div className="item">
              <div className="ui horizontal label">Address</div>
              {`${user.address.street} ${user.address.suite} ${user.address.city}`}
            </div>
            <div className="item">
              <div className="ui horizontal label">Zipcode</div>
              {user.address.zipcode}
            </div>
          </div>
          <button onClick={handleToggle} className="ui negative button">
            Close
          </button>
        </div>
      </div>
    );
  };
  return <div>{renderUser(user)}</div>;
};

export default UserInfoPopup;
