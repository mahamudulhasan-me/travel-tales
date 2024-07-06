import { Layout, Menu } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { userSelector } from "../../redux/store";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import Logout from "./Logout";

const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(userSelector);
  const role = user!.role;
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, "student");
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="flex flex-col items-center justify-start h-screen pt-10  bg-slate-800"
    >
      <h1 className="text-3xl text-center text-slate-200 py-3 font-semibold">
        PH Uni
      </h1>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
      <Logout />
    </Sider>
  );
};

export default Sidebar;
