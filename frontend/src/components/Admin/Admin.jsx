import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import NewUser from "../NewUser/NewUser";
import styles from "./Admin.module.css";
import { users } from "../../users";

const Admin = ( ) => {
  const [addNewUser, setAddNewUser] = useState(false);

  function addNewUserHandler() {
    setAddNewUser((addNewUser) => !addNewUser);
  }

  return (
    <div className={styles.top_container}>
      <Navigation
        username="Asiri"
        userType="Admin"
        action="Create New User"
        isClicked={addNewUser}
        buttonAction={addNewUserHandler}
      />
      {addNewUser ? (
        <NewUser buttonAction={addNewUserHandler} />
      ) : (
        <div className={styles.container}>
          <div className={styles.search_box}>
            <p>Users</p>
            <div className={styles.search_by}>
              <label className={styles.lable} htmlFor="search-by">
                Search By :{" "}
              </label>
              <select name="search-by" id="search-by" className={styles.select}>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="id">ID</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search User"
              className={styles.search_input}
            />
          </div>
          <div className="table">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.dateOfBirth}</td>
                      <td>{user.mobile}</td>
                      <td>{user.status}</td>
                      <td>{user.accountType}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
