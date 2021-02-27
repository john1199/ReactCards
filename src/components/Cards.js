import React from "react";
import Card from "./Card";

import img1 from "../assets/computer-monitor.png";

const cards = [
  {
    id: 1,
    title: "Facebook",
    image: img1,
    url: "https://github.com/john1199",
  },
  {
    id: 2,
    title: "GitHub",
    image: img1,
    url: "https://github.com/john1199",
  },
  {
    id: 3,
    title: "Instagram",
    image: img1,
    url: "https://github.com/john1199",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
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
