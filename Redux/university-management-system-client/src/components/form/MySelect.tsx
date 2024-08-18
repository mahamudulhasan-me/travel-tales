import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

interface IMySelectProps {
  name: string;
  label: string;
  options: { value: string | number; label: string | number }[];
}

const MySelect = ({ name, label, options }: IMySelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
          // defaultValue={options[0]?.value}
          style={{ width: "100%" }}
          {...field}
          options={options}
        />
        {error && <p className="text-rose-600 mt-0.5">{error?.message}</p>}
      </Form.Item>
    )}
  />
);

export default MySelect;
