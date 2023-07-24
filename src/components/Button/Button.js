// import { useState } from "react";
import "./Button.css";

const getCustomerButton = (color, variant, hover, disableShadow) => {
  const className = [];

  if (!variant) {
    className.push(`button-${color}`);
  }
  if (variant === "outline") {
    className.push(`button-${color}__outline button-outline `);
  }
  if (variant === "text") {
    className.push(`button-${color}__outline button-text`);
  }

  if (hover) {
    className.push(`button-active`);
  }

  if (!disableShadow) {
    className.push(`shadow`);
  }

  return className.join(" ");
};

const Button = ({
  label,
  children = "Default",
  variant,
  color = "default",
  hover = false,
  disableShadow = false,
}) => {
  const classLabel = hover ? "label-hover" : "label";
  const labelComponent = <label className={classLabel}>{label}</label>;

  const classButton = getCustomerButton(color, variant, hover, disableShadow);

  return (
    <div>
      {label ? labelComponent : ""}
      <button className={classButton}>{children}</button>
    </div>
  );
};

export default Button;
