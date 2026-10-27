export default function Badge({ tone, children }) {
  return <span className={tone ? `badge ${tone}` : "badge"}>{children}</span>;
}
