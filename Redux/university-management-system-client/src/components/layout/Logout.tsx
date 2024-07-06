import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { userLoggedOut } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Logout = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => dispatch(userLoggedOut())}
      type="primary"
      icon={<LogoutOutlined />}
      className="mt-10 w-full"
    >
      Logout
    </Button>
  );
};

export default Logout;
