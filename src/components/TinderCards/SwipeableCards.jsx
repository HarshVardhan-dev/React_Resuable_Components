import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./SwipeableCards.module.css";

const cardsData = [
  {
    id: 1,
    title: "Card 1",
    content: "This is the first card.",
    bgColor: "#FF6B6B",
  },
  {
    id: 2,
    title: "Card 2",
    content: "This is the second card.",
    bgColor: "#6B8EFF",
  },
  {
    id: 3,
    title: "Card 3",
    content: "This is the third card.",
    bgColor: "#6BFF8E",
  },
];

const SwipeableCards = () => {
  const [cards, setCards] = useState(cardsData);

  const handleSwipe = (direction, cardId) => {
    console.log(`Swiped ${direction} on card ${cardId}`);
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  return (
    <div className={styles.cardContainer}>
      {cards.map((card) => (
        <SwipeableCard
          key={card.id}
          card={card}
          onSwipe={(direction) => handleSwipe(direction, card.id)}
        />
      ))}
      {cards.length === 0 && (
        <p className={styles.noCards}>No more cards to swipe!</p>
      )}
    </div>
  );
};

const SwipeableCard = ({ card, onSwipe }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe("left"),
    onSwipedRight: () => onSwipe("right"),
  });

  return (
    <div
      className={styles.card}
      {...handlers}
      style={{ backgroundColor: card.bgColor }}
    >
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  );
};

export default SwipeableCards;
