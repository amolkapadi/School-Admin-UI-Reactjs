export default function iconClass(icon) {
  if (!icon) return "";
  return icon.startsWith("bi-") ? `bi ${icon}` : `bi bi-${icon}`;
}
