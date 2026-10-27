import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const studentLinks = [
  { to: "/students", label: "All Students", end: true },
  { to: "/students/add", label: "Add Student" },
  { to: "/attendance", label: "Attendance" },
];

const menuLinks = [
  { to: "/teachers", label: "Teachers", icon: "bi-person-badge" },
  { to: "/classes", label: "Classes", icon: "bi-building" },
  { to: "/subjects", label: "Subjects", icon: "bi-book" },
  { to: "/timetable", label: "Timetable", icon: "bi-calendar2-week" },
  { to: "/exams", label: "Exams", icon: "bi-clipboard-check" },
  { to: "/fees", label: "Fees", icon: "bi-wallet2" },
  { to: "/transport", label: "Transport", icon: "bi-bus-front" },
  { to: "/settings", label: "Settings", icon: "bi-gear" },
];

export default function Sidebar({ collapsed, mobileOpen, onNavigate, onExpand }) {
  const { pathname } = useLocation();
  const studentSection =
    pathname.startsWith("/students") || pathname.startsWith("/attendance");
  const [studentsOpen, setStudentsOpen] = useState(studentSection);

  useEffect(() => {
    if (studentSection) setStudentsOpen(true);
  }, [studentSection]);

  return (
    <aside
      className={`sidebar${collapsed ? " collapsed" : ""}${mobileOpen ? " open" : ""}`}
    >
      <div className="brand">
        <div className="brand-logo">CA</div>
        <div className="brand-text">
          <h2>Campora</h2>
          <small>School Admin</small>
        </div>
      </div>

      <nav className="menu">
        <NavLink to="/dashboard" onClick={onNavigate}>
          <i className="bi bi-grid-1x2" />
          <span className="menu-label">Dashboard</span>
        </NavLink>

        <div className={`menu-group${studentsOpen ? " open" : ""}`}>
          <button
            type="button"
            className={`menu-dropdown-btn${studentSection ? " active-parent" : ""}`}
            onClick={() => {
              if (collapsed) {
                onExpand?.();
                setStudentsOpen(true);
                return;
              }
              setStudentsOpen((open) => !open);
            }}
          >
            <span className="menu-left">
              <i className="bi bi-mortarboard" />
              <span className="menu-label">Students</span>
            </span>
            <i className="bi bi-chevron-down chevron" />
          </button>
          <div className="submenu">
            <div className="submenu-inner">
              {studentLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} onClick={onNavigate}>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {menuLinks.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={onNavigate}>
            <i className={`bi ${link.icon}`} />
            <span className="menu-label">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/login" className="logout-link" onClick={onNavigate}>
          <i className="bi bi-box-arrow-left" />
          <span className="menu-label">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
}
