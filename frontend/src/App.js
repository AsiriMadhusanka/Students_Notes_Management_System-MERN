import "./App.css";
import Admin from "./components/Admin/Admin";
import FirstLog from "./components/FirstLog/FirstLog";
import LogIn from "./components/Login/LogIn";
import NewNote from "./components/NewNote/NewNote";
import NewUser from "./components/NewUser/NewUser";
import Note from "./components/Note/Note";
import Student from "./components/Student/Student";
import { users } from "./users";

function App() {
  return (
    <div className="app">
      {/* <FirstLog /> */}
      {/* <LogIn /> */}
      {/* <Admin users={users} /> */}
      <Student />
      {/* <NewNote /> */}
    </div>
  );
}

export default App;
