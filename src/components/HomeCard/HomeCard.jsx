/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const HomeCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/public/Card.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-20">
        {card.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
