import React from "react";
import style from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, erro, onBlur }) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={style.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      {erro && <p className={style.erro}>{erro}</p>}
    </div>
  );
};

export default Input;
