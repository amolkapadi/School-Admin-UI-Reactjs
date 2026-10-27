export default function StatCard({ icon, tone, label, value, trend, trendUp }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <span className="label">{label}</span>
        <strong className="value">{value}</strong>
        {trend ? <span className={`trend${trendUp ? " up" : ""}`}>{trend}</span> : null}
      </div>
    </article>
  );
}
