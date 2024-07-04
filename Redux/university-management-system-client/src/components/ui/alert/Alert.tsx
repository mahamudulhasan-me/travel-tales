import { Alert } from "antd";
import { useEffect, useState } from "react";

interface IAlertProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
}
const MyAlert = ({ message, type }: IAlertProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }
  }, [visible]);
  return (
    <div
      className={`w-96 z-50 absolute top-5  transition-all  ${
        visible ? "right-5" : "-right-96"
      }`}
    >
      <Alert message={message} type={type} showIcon />
    </div>
  );
};

export default MyAlert;
