import { useState } from "react";
import styles from "./Login.module.css";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form className={styles.form}>
        <div className={styles.email}>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.submit}>Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
