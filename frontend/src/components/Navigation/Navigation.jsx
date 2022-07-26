import "./Navigation.css";

const Navigation = ({
  action,
  username,
  userType,
  buttonAction,
  isClicked,
}) => {
  return (
    <div className="navigation">
      <p className="user">
        Welcome {username} <span className="user-type">{userType}</span>{" "}
      </p>
      <button
        className="action"
        onClick={() => {
          buttonAction();
        }}
        disabled={isClicked}
      >
        {action}
      </button>
    </div>
  );
};

export default Navigation;
