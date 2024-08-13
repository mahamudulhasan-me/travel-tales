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
      className="mt-10 l absolute bottom-5 w-4/5 left-4"
    >
      Logout
    </Button>
  );
};

export default Logout;
