import { useState } from "react";
import styles from "./FirstLog.module.css";
import axios from 'axios';

const FirstLog = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // let search = window.location.search;
  // let params = new URLSearchParams(search);
  // let foo = params.get('email');

  // setEmail(foo)
  // console.log(email)

  function sendData(e){
    e.preventDefault();
    
   
    const newStudent ={
      email,
      password:"12345"
    }

    axios.put('https://localhost:4000/customers/update/:email', {
      name: 'Tophat Cat'
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });

  }

  


  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <form className={styles.form}>
        <div className={styles.name}>
          <label>First Name</label>
          <input
            type="text"
            className={styles.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            className={styles.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className={styles.dob}>
          <label>Date Of Birth</label>
          <input type="date" onChange={(e) => setBirthday(e.target.value)} />
        </div>

        <div className={styles.mobile}>
          <label>Mobile No</label>
          <input type="number" onChange={(e) => setMobileNo(e.target.value)} />
        </div>

        <div className={styles.email}>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className={styles.password}>
          <label>New Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        <button className={styles.submit}>Log in</button>
      </form>
    </div>
  );
};

export default FirstLog;
