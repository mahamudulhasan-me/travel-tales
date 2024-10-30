import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Travel Tales",
};
//@ts-ignore
const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex items-start justify-between w-full h-[calc(100vh-3.5rem)]">
      <div className="w-[18%] h-full overflow-y-auto custom-scrollbar">
        <Sidebar />
      </div>{" "}
      <div className="w-[82%] p-6 h-full overflow-y-auto custom-scrollbar ">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
