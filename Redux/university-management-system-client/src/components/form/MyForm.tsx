import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormConfig {
  resolver?: any;
}
interface IMyFormProps extends IFormConfig {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const MyForm = ({ onSubmit, children, resolver }: IMyFormProps) => {
  const formConfig: IFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default MyForm;
