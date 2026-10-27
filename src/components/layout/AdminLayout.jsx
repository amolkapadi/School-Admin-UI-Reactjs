import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMobileOpen(false);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <div
        className={`overlay${mobileOpen ? " show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className="layout">
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onNavigate={() => setMobileOpen(false)}
          onExpand={() => setCollapsed(false)}
        />
        <div className={`main${collapsed ? " collapsed" : ""}`}>
          <Topbar
            onMenu={() => setMobileOpen((open) => !open)}
            onCollapse={() => {
              if (window.innerWidth <= 900) return;
              setCollapsed((open) => !open);
            }}
          />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
