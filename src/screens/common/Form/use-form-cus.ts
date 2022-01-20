import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormBase } from "react-hook-form";

type Props = {
  validateSchema?: any;
  initValues: any;
};

export const useForm = ({ validateSchema, initValues }: Props) => {
  return useFormBase({
    defaultValues: initValues,
    resolver: validateSchema ? yupResolver(validateSchema) : undefined,
  });
};
