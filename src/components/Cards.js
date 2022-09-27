import React, { useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([
    {
      id: uniqid(),
      name: "",
      image: "",
      clicked: false,
    },
  ]);
}
