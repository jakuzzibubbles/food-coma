import React, { useState, useEffect } from "react";
import Card from "./Card";

const GameBoard = ({ updateScore, numCards = 6 }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  // Generate cards dynamically
  const generateCards = (num) => {
    const generatedCards = Array.from({ length: num }, (_, i) => ({
      id: i + 1,
      name: `Card ${i + 1}`,
    }));
    return generatedCards;
  };

  const shuffleCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      updateScore(true); // Reset the score
      setClickedCards([]); // Reset clicked cards
    } else {
      updateScore(); // Increment the score
      setClickedCards([...clickedCards, id]);
      setCards(shuffleCards(cards)); // Shuffle cards
    }
  };

  useEffect(() => {
    const generatedCards = generateCards(numCards);
    setCards(shuffleCards(generatedCards));
  }, [numCards]);

  return (
    <div style={gameBoardStyle}>
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

const gameBoardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  gap: "1rem",
  padding: "1rem",
};

export default GameBoard;
