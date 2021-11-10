import React, { useState } from "react";
import Row from "./Row";

const Table = ({ User, EditUser, deleteUserid, fastEdit, setUser }) => {
  const [sort,setSort] = useState('');
  const SortList = () => {
    switch (sort) {
      case "name":
        setUser(
          User.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          })
        );
        break;
      case "address":
        setUser(
          User.sort((a, b) => {
            if (a.address < b.address) return -1;
            if (a.address > b.address) return 1;
            return 0;
          })
        );
        break;
      default:
        break;
    }
    return User;
  };
  return (
    <div>
      <div className="form-group">
        <select
          className="custom-select"
          defaultValue=""
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Select sort by</option>
          <option value="name">Name</option>
          <option value="address">Address</option>
        </select>
      </div>
      <table className="table table-bordered  ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {SortList().map((dt) => (
            <Row
              key={dt.id}
              dt={dt}
              deleteUserid={deleteUserid}
              EditUser={EditUser}
              fastEdit={fastEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
