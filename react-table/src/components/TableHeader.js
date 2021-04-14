import React from "react";

const TableHeader = (props) => {
  const checkBox = () => {
    return (
      <div className="ui checkbox">
        <input type="checkbox" onChange={checkAllCheckbox} />
        <label>{props.checkbox}</label>
      </div>
    );
  };

  const checkAllCheckbox = (event) => {
    var allCheckboxChecked = event.target.checked;
    var checkboxes = document.getElementsByName("enableCheckbox");
    if (allCheckboxChecked) {
      checkboxes.forEach((checkbox) => (checkbox.checked = true));
    } else {
      checkboxes.forEach((checkbox) => (checkbox.checked = false));
    }
  };

  return (
    <thead>
      <tr>
        <th />
        <th>{checkBox()}</th>
        <th>{props.name}</th>
        <th>{props.email}</th>
        <th>{props.phone}</th>
        <th>{props.address}</th>
        <th>{props.zipcode}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
