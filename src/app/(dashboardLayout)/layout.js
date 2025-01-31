// import Sidebar from "@/components/shared/Sidebar";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       {children}
//     </div>
//   );
// };

// export default DashboardLayout;
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
