import { Input } from "antd";
import { Controller } from "react-hook-form";

interface IMyInputProps {
  name: string;
  type: string;
  label?: string;
}
const MyInput = ({ name, type }: IMyInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default MyInput;
