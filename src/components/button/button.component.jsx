import "./button.styles.scss";

const Button = ({ text = "Book an Appointment", onClick }) => {
  return (
    <button className="button_component" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
