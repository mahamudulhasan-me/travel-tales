import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import MyForm from "../components/form/MyForm";
import MyInput from "../components/form/MyInput";

const ChangePassword = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Row>
      <MyForm onSubmit={handleSubmit}>
        <h1>Change Password</h1>
        <MyInput name="oldPassword" type="password" label="Old Password" />
        <MyInput name="newPassword" type="password" label="New Password" />
        <Button htmlType="submit">Submit</Button>
      </MyForm>
    </Row>
  );
};

export default ChangePassword;
