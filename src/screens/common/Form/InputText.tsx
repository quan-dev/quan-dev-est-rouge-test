import React from "react";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "./ErrorMessage";

type Props = {
  name: string;
  title: string;
  require?: boolean;
  placeholder?: string;
  note?: React.ReactNode;
  optionClass?: string;
  titleClass?: string;
  inputClass?: string;
  type?: "text" | "password" | "email";
  style?: any;
};
export const InputText: React.FC<Props> = ({
  name,
  title,
  titleClass,
  inputClass,
  optionClass,
  require,
  placeholder,
  note,
  type,
  style,
}) => {
  const { register, watch, setValue } = useFormContext();

  const value: string = watch(name);

  const onBlur = () => {
    if (type !== "password") {
      setValue(name, String(value).trim(), { shouldValidate: true });
    }
  };

  return (
    <div className={`input-text ${optionClass || ""}`}>
      <div style={{ marginBottom: "10px" }}>
        <span className={titleClass || "input-text__title"}>
          {title}{" "}
          {require && <span className="input-text__title__require">*</span>}
        </span>
      </div>
      <input
        className={inputClass}
        {...register(name)}
        name={name}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        style={style}
        autoComplete="off"
      />
      <ErrorMessage name={name} />
      {note ? note : <></>}
    </div>
  );
};
