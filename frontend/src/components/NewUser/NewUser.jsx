import { useState } from "react";
import styles from "./NewUser.module.css";

const NewUser = ({ buttonAction }) => {
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const setEmailHandler = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError(true);
    } else {
      setError(false);
    }

    setEmail(event.target.value);
  };

  console.log(userType);

  return (
    <div className={styles.newUser}>
      <p>Create a New User</p>
      <button className={styles.close} onClick={() => buttonAction()}>
        x
      </button>
      <div className={styles.new}>
        <label className={styles.label} htmlFor="user-type">
          User Type
        </label>
        <select
          name="user-type"
          id="userType"
          className={styles.userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="student">Student</option>
        </select>
        <label htmlFor="user-type" className={styles.emailLable}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.email}
          placeholder="email"
          onChange={(e) => setEmailHandler(e)}
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: error ? "#f5cece" : "",
          }}
        />
        <button type="submit" id="submit" className={styles.submit}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default NewUser;
