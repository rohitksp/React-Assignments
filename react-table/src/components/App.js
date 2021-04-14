import React, { useState, useEffect } from "react";
import JsonPlaceholder from "../api/JsonPlaceholder";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Dropdown from "./Dropdown";
import Popup from "./Popup";
import Pagination from "./Pagination";
import UserInfoPopup from "./UserInfoPopup";
import { View } from "react-native-web";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedZipcode, setSelectedZipcode] = useState();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [radioBtn, setRadioBtn] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const [dataPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 0,
    end: dataPerPage,
  });

  const fetchData = () => {
    setLoading(true);
    JsonPlaceholder.get("/users")
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .then((data) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="ui active centered inline loader" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const togglePopup = () => {
    setOpen(!open);
  };

  const toggleBtn = () => {
    setRadioBtn(!radioBtn);
  };

  const userData = users.slice(pagination.start, pagination.end);
  const onPaginationChange = (start, end) => {
    setPagination({ start, end });
  };

  return (
    <div>
      <View style={{ flexDirection: "row" }}>
        <button style={{ marginRight: "20px" }} onClick={togglePopup}>
          Find value with zipcode
        </button>
        <Pagination
          dataPerPage={dataPerPage}
          totalData={users.length}
          onPaginationChange={onPaginationChange}
        />
      </View>
      <Dropdown users={userData} onSelect={setSelectedZipcode} />
      <table style={{ marginTop: 0 }} className="ui celled table">
        <TableHeader
          checkbox="Checkbox"
          name="Name"
          email="Email ID"
          address="Address"
          phone="Phone No."
          zipcode="Zipcode"
          users={userData}
        />
        <TableBody
          users={userData}
          search={searchTerm}
          searchZipcode={selectedZipcode}
          handleToggle={toggleBtn}
          onChange={setSelectedUser}
        />
      </table>
      {open && <Popup onChange={setSearchTerm} handleToggle={togglePopup} />}
      {radioBtn && (
        <UserInfoPopup user={selectedUser} handleToggle={toggleBtn} />
      )}
    </div>
  );
};

export default App;
