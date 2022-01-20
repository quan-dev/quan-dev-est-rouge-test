import { ErrorMessage as ErrorMessageBase } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";
type Props = {
  name: string;
};
export const ErrorMessage: React.FC<Props> = React.memo(({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="error-message">
      <ErrorMessageBase name={name} errors={errors} />
    </div>
  );
});
