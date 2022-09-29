import React, { useState } from "react";
import uniqid from "uniqid";

export default function Cards(props) {
  const { score, setScore, topScore, setTopScore } = props;
  const [cards, setCards] = useState([
    {
      id: uniqid(),
      name: "Son Goku",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/7/71/Icon_Goku_%28Super_Saiyan%29.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Son Gohan",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/5/5b/Icon_Gohan_%28Teen%29.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Piccolo",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/4/45/Icon_Piccolo.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Vegeta",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/0/0a/Icon_Vegeta_%28Super_Saiyan%29.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Trunks",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/8/88/Icon_Trunks.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Broly",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/7/75/Icon_Broly.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Kid Buu",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/e/e0/Icon_Kid_Buu.png/",
      clicked: false,
    },
    {
      id: uniqid(),
      name: "Cell",
      image:
        "https://static.wikia.nocookie.net/dragonballfighterz/images/c/cd/Icon_Cell.png/",
      clicked: false,
    },
  ]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const toggleClickedCard = (e) => {
    const newCards = cards.map((card) => {
      if (
        card.id === e.target.getAttribute("data-key") &&
        card.clicked === false
      ) {
        return { ...card, clicked: true };
      }
      return card;
    });

    setCards(shuffle(newCards));
  };

  const handleClick = (e) => {
    toggleClickedCard(e);
    updateScore(e);
  };

  const updateScore = (e) => {
    let clickStatus = e.target.getAttribute("data-click");
    console.log(clickStatus);
    if (clickStatus == "false") {
      if (score < topScore) {
        setScore(score + 1);
      } else if (score >= topScore) {
        setScore(score + 1);
        setTopScore(score + 1);
      }
    } else if ((clickStatus = "true")) {
      refreshCards();
    }
  };

  const refreshCards = () => {
    let freshCards = cards.map((card) => {
      return { ...card, clicked: false };
    });
    setCards(freshCards);
    setScore(0);
  };

  return (
    <div className="cardContainer">
      {cards.map((card) => (
        <div
          key={card.id}
          data-key={card.id}
          data-click={card.clicked}
          className="card"
          onClick={handleClick}
        >
          <img
            className="avatar"
            src={card.image}
            alt={card.name}
            data-key={card.id}
            data-click={card.clicked}
          />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
}
