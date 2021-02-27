import React from "react";
import Card from "./Card";

import instagram from "../assets/instagram.jpg";
import github from "../assets/codigo.jpg";
import linkedin from "../assets/linkedin.jpg";

const cards = [
  {
    id: 1,
    title: "Instagram",
    image: instagram,
    url: "https://www.instagram.com/jrianoma/",
  },
  {
    id: 2,
    title: "GitHub",
    image: github,
    url: "https://github.com/john1199",
  },
  {
    id: 3,
    title: "LinkedIn",
    image: linkedin,
    url: "https://www.linkedin.com/in/john-jairo-riaño-martinez-8a8771172/",
  },
];

function Cards() {
  return (
    <div className="container h-100 pt-4">
      <div className="row h-100 align-items-center">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
