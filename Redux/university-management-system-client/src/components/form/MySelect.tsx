import { Form, Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const MySelect = ({ label }: { label: string }) => (
  <Form.Item label={label}>
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "disabled", label: "Disabled" },
      ]}
    />
  </Form.Item>
);

export default MySelect;
