import React from "react";

const Header = ({ score, highScore }) => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Food Coma</h1>
      <div style={scoreContainerStyle}>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
};

const headerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#282c34",
  color: "#fff",
  boxSizing: "border-box",
  position: "relative",
  top: 0,
  left: 0,
};

const titleStyle = {
  margin: "0",
};

const scoreContainerStyle = {
  marginTop: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  width: "300px",
};

export default Header;
