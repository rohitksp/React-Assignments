import React from "react";

const TableBody = ({
  users,
  searchZipcode,
  search,
  handleToggle,
  onChange,
}) => {
  const renderUser = (user) => {
    const disabled = user.id % 2 === 0 ? "" : "disabled";
    const name = user.id % 2 === 0 ? "enableCheckbox" : "disabledCheckbox";

    const onSubmit = (user) => {
      handleToggle();
      onChange(user);
    };

    return (
      <tr key={user.id}>
        <td>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="data" onChange={() => onSubmit(user)} />
              <label />
            </div>
          </div>
        </td>
        <td>
          <div className={`ui ${disabled} checkbox`}>
            <input type="checkbox" name={name} disabled={disabled} />
            <label>{user.id}</label>
          </div>
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
          {`${user.address.street} ${user.address.suite} ${user.address.city}`}
        </td>
        <td>{user.address.zipcode}</td>
      </tr>
    );
  };

  const filteredRow = (user) => {
    if (searchZipcode) {
      return user.address.zipcode === searchZipcode;
    }
    return true;
  };

  const searchedData = (user) => {
    if (search === "") {
      return user;
    } else if (user.address.zipcode.includes(search)) {
      return user;
    }
  };

  return (
    <tbody>
      {users
        .filter((user) => searchedData(user))
        .filter((user) => filteredRow(user))
        .map((user) => renderUser(user))}
    </tbody>
  );
};

export default TableBody;
