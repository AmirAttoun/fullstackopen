const Button = ({ handleClick, text }) => (
  <p>
    <button onClick={handleClick}>{text}</button>
  </p>
);

export default Button;
