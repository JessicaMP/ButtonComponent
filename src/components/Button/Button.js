// import { useState } from "react";
import "./Button.css";

const Button = ({ children = "Default", variant = "default" }) => {
  // const [typeButton] = useState(variant);
  // // setTypeButton(variant);
  console.log({ variant });
  // const setButton = () => {};
  //
  return <button className={variant}>{children}</button>;
};

export default Button;
