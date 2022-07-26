import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Admin from "./components/Admin/Admin";
import FirstLog from "./components/FirstLog/FirstLog";
import LogIn from "./components/Login/LogIn";
// import NewNote from "./components/NewNote/NewNote";
import NewUser from "./components/NewUser/NewUser";
// import Note from "./components/Note/Note";
// import Student from "./components/Student/Student";

class App extends Component{
  render(){
    return(
      <Router>
       
      <Route path="/" exact component={LogIn}></Route>
      <Route path="/NewUser" exact component={NewUser}></Route>
      <Route path="/admin" exact component={Admin}></Route>
      <Route path="/customers/FirstLog" exact component={FirstLog}></Route>
      </Router>
    )
  }
}
export default App;