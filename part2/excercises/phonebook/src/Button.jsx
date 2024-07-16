/* eslint-disable react/prop-types */
const Button = ({ type, text, onClick, classDef }) => (
  <button className={classDef} type={type} onClick={onClick}>
    {text}
  </button>
)

export default Button
