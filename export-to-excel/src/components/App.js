import React, { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const App = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ReactHTMLTableToExcel
        className="download-table-xls-button"
        table="data"
        filename="tabledata"
        sheet="tabledata"
        buttonText="Import to Excel"
      />
      <table
        style={{ marginTop: 0 }}
        id="data"
        className="ui celled striped table"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{`${user.address.street} ${user.address.suite} ${user.address.city}`}</td>
                <td>{user.address.zipcode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
