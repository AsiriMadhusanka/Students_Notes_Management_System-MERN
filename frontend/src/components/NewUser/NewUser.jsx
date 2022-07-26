import { useState } from "react";
import styles from "./NewUser.module.css";
import axios from "axios";

const NewUser = ({ buttonAction }) => {
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function sendData(e){
    e.preventDefault();
    
   
    const newStudent ={
      email,
      accountType:userType,
      password:"12345"
    }

    axios.post("http://localhost:4000/customers/register", newStudent).then((res)=>{
        alert("Created new user!")
        {window.location = '/admin';}
        }).catch((err)=>{
        alert(err)
    })

  }

  
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
        <button id="submit" className={styles.submit}  onClick={(e)=>sendData(e)}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default NewUser;
