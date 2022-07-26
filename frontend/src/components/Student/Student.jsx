import Navigation from "../Navigation/Navigation";
import Note from "../Note/Note";
import styles from "./Student.module.css";
import { notes } from "../../notes";
import { useState } from "react";
import NewNote from "../NewNote/NewNote";

const Student = () => {
  const [addNewNote, setAddNewNote] = useState(false);

  function addNewNoteHandler() {
    setAddNewNote((addNewNote) => !addNewNote);
  }

  return (
    <div className={styles.container}>
      <Navigation
        username="Asiri"
        userType="Student"
        action="New Note"
        isClicked={addNewNote}
        buttonAction={addNewNoteHandler}
      />
      {addNewNote ? (
        <NewNote buttonAction={addNewNoteHandler} />
      ) : (
        <div className={styles.notes}>
          {notes.map((note) => {
            return <Note title={note.title} description={note.description} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Student;
