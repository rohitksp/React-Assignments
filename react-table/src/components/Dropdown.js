import React from "react";
import _ from "lodash";

const Dropdown = ({ users, onSelect }) => {
  const removeDuplicates = _.uniqBy(users, "address.zipcode");

  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="ui fluid selection search dropdown"
    >
      <option value="">Zipcodes</option>
      {removeDuplicates.map((user) => (
        <option key={user.id}>{user.address.zipcode}</option>
      ))}
    </select>
  );
};

export default Dropdown;
