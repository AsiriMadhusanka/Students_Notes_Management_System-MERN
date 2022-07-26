import styles from "./Note.module.css";

const Note = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.deleteBtn}>Delete</button>
        <button className={styles.editBtn}>Edit</button>
      </div>
    </div>
  );
};

export default Note;
