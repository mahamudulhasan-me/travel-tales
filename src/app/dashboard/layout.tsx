import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Travel Tales",
};
export function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <div className="flex h-[calc(100vh-5rem)]">
      <div className="w-[18%] overflow-y-auto custom-scrollbar">
        <Sidebar />
      </div>{" "}
      <div className="w-[82%] m-6 h-full overflow-y-auto custom-scrollbar ">
        {children}
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
