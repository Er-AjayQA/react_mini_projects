import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";

export const Header = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header Content */}
      <div className="flex items-center gap-4 p-4 border-b justify-between">
        <SidebarTrigger />
        <div>
          <h5 className="">User Name</h5>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            minHeight: "200px",
            borderRadius: "8px",
          }}
          className="h-full"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};
