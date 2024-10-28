import ManageUsersBreadcrumb from "./Breadcrumb";
import UsersTable from "./UsersTable";

export const metadata = {
  title: "Dashboard | Manage Users",
  description: "Travel Tales",
};
const ManageUsers = () => {
  return (
    <div>
      <div className="bg-white common-shadow rounded-md w-full p-4">
        <ManageUsersBreadcrumb />
      </div>
      <div className="bg-white common-shadow rounded-md w-full p-4 mt-4">
        <UsersTable />
      </div>
    </div>
  );
};

export default ManageUsers;
