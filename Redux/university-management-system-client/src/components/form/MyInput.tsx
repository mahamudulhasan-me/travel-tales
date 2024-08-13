import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

interface IMyInputProps {
  name: string;
  type: string;
  label?: string;
}
const MyInput = ({ name, type, label }: IMyInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </>
  );
};

export default MyInput;
