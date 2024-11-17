import React from "react";

const Card = ({ card, onClick }) => {
  return (
    <div style={cardStyle} onClick={() => onClick(card.id)}>
      <p>{card.name}</p>
    </div>
  );
};

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#61dafb",
  color: "#000",
  fontSize: "1.2rem",
  fontWeight: "bold",
  height: "100px",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Card;
