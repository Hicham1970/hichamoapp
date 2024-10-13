export default function Header() {
  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  const paragraphStyle = {
    color: "blue",
    fontStyle: "italic",
    fontSize: "22px",
  };

  return (
    <>
      <h1 style={headerStyle}>Hello Style!</h1>
      <p style={paragraphStyle}>Add a little style!</p>
      <p style={{ backgroundColor: "lightblue" }}>Hello style!</p>
    </>
  );
}
