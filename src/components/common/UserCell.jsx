export default function UserCell({ initials, name, avatar }) {
  return (
    <div className="user-cell">
      <span className={avatar ? `mini-avatar ${avatar}` : "mini-avatar"}>{initials}</span>
      <span>{name}</span>
    </div>
  );
}
