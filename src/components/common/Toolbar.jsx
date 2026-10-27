export default function Toolbar({ left, right }) {
  return (
    <div className="toolbar">
      {left ? <div className="left">{left}</div> : null}
      {right ? <div className="right">{right}</div> : null}
    </div>
  );
}
