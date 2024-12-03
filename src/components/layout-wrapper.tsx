import MainContent from "./main-content";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
