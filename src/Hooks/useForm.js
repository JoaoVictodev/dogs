import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message:
      "A senha precisa ter 1 caracter maiusculo 1 minusculo 1 digito e um caracter especial. com no minimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setErro("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
