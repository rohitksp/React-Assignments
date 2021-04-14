import React, { useState } from "react";
import "./popup.css";

const Popup = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.onChange(term);
    props.handleToggle();
  };

  const popupContent = () => {
    return (
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Put your zipcode here</label>
          <input
            type="text"
            placeholder="Type Your Zipcode"
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
        <button className="ui primary button">Find</button>
        <button onClick={props.handleToggle} className="ui negative button">
          Close
        </button>
      </form>
    );
  };

  const displayPopup = () => {
    return (
      <div className="popup-box">
        <div className="box">{popupContent()}</div>
      </div>
    );
  };

  return displayPopup();
};

export default Popup;
