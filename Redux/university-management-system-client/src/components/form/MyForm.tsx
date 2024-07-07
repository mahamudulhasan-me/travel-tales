import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
interface IMyFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const MyForm = ({ onSubmit, children }: IMyFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default MyForm;
