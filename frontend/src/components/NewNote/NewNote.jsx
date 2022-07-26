import { useState } from "react";
import styles from "./NewNote.module.css";

const NewNote = ({ buttonAction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.container}>
      <h2>Add New Note</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        name=""
        cols="30"
        rows="10"
        placeholder="description"
      ></textarea>
      <div className="btns">
        <button className={styles.close} onClick={() => buttonAction()}>
          Close
        </button>
        <button className={styles.button}>Add</button>
      </div>
    </div>
  );
};

export default NewNote;
