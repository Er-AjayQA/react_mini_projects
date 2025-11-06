import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main
          className="content"
          style={{
            border: "2px solid red",
            padding: "10px",
            minHeight: "200px",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
