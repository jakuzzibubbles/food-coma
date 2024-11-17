import React from "react";

const Header = ({ score, highScore }) => {
  return (
    <header style={headerStyle}>
      <h1>Memory Card Game</h1>
      <div style={scoreContainerStyle}>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
};

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#282c34",
  color: "#fff",
};

const scoreContainerStyle = {
  marginTop: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  width: "200px",
};

export default Header;
