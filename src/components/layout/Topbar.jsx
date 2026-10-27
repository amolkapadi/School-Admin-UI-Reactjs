export default function Topbar({ onMenu, onCollapse }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn menu-toggle" type="button" aria-label="Open menu" onClick={onMenu}>
          <i className="bi bi-list" />
        </button>
        <button
          className="icon-btn sidebar-collapse"
          type="button"
          aria-label="Collapse sidebar"
          onClick={onCollapse}
        >
          <i className="bi bi-layout-sidebar-inset" />
        </button>
        <div className="search">
          <i className="bi bi-search" />
          <input type="text" placeholder="Search students, teachers, classes..." readOnly />
        </div>
      </div>
      <div className="topbar-right">
        <button className="icon-btn" type="button" aria-label="Notifications">
          <i className="bi bi-bell" />
          <span className="dot" />
        </button>
        <div className="profile">
          <div className="avatar">A</div>
          <div>
            <strong>Amol Admin</strong>
            <span>Principal Office</span>
          </div>
        </div>
      </div>
    </header>
  );
}
