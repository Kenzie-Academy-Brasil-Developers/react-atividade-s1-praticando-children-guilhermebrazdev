import "./child.css";

function Children({ children }) {
  return (
    <div className="paiBox">
      <span id="spanBox">{children}</span>
    </div>
  );
}

export default Children;
