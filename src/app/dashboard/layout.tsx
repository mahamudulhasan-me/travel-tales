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
    <div className="flex h-screen ">
      <div className="w-[18%]">
        <Sidebar />
      </div>{" "}
      <div className="w-[82%] m-6">{children}</div>
    </div>
  );
}

export default AdminDashboardLayout;
