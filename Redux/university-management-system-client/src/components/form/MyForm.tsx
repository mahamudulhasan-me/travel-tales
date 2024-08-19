import { Form } from "antd";
import { ReactNode, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useAppSelector } from "../../redux/hooks";

interface IFormConfig {
  resolver?: any;
}
interface IMyFormProps extends IFormConfig {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const MyForm = ({ onSubmit, children, resolver }: IMyFormProps) => {
  const { submitted } = useAppSelector((state) => state.utils);
  const formConfig: IFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);

  useEffect(() => {
    if (submitted) {
      methods.reset();
    }
  }, [methods, submitted]);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default MyForm;
