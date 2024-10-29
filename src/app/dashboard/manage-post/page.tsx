import ManagePostsBreadcrumb from "./ManagePostsBreadcrumb";
import PostsTable from "./PostsTable";

export const metadata = {
  title: "Dashboard | Manage Posts",
  description: "Travel Tales",
};
const ManageUsers = () => {
  return (
    <div>
      <div className="bg-white common-shadow rounded-md w-full p-4">
        <ManagePostsBreadcrumb />
      </div>
      <div className="bg-white common-shadow rounded-md w-full p-4 mt-4">
        <PostsTable />
      </div>
    </div>
  );
};

export default ManageUsers;
