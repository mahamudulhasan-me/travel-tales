import { Form } from "antd";
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
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default MyForm;
