import Sidebar from "@/components/admin/Sidebar";

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
      <div className="w-[82%]">{children}</div>
    </div>
  );
}

export default AdminDashboardLayout;
