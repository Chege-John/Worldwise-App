import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Children should be a valid React node
  onClick: PropTypes.func, // onClick should be a function (optional)
  type: PropTypes.oneOf(["button", "submit", "reset"]), // type should be one of these strings
};

export default Button;
