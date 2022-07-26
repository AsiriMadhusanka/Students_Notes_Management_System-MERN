import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import Admin from "../Admin/Admin";


const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function sendData(e){
    e.preventDefault();
    
   
    const newStudent ={
      password,
      email
    }

    axios.post("http://localhost:4000/customers/login", newStudent).then((res)=>{
        alert("Login successfully!")
        if(res.data.data.customer.accountType==="admin")
        {console.log(res.data.data.customer)}
        {window.location = '/admin';}
        }).catch((err)=>{
        alert(err)
    })



}


  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form className={styles.form} onSubmit={(e)=>sendData(e)}>
        
        
        <div className={styles.email}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div className={styles.password}>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className={styles.submit} >Log In</button>

      </form>
    </div>
  );
};

export default LogIn;
