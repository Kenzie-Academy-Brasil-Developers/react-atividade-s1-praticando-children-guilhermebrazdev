import "./child.css";

function CenteredCard({ children }) {
  return (
    <div className="paiBox">
      <span id="spanBox">{children}</span>
    </div>
  );
}

export default CenteredCard;
