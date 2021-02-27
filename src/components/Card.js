import React from "react";
import PropTypes from "prop-types";
import "animate.css/animate.min.css";

import "../cards.css";
function Card(props) {
  const { title, image, url } = props.card;
  return (
    <div className="card text-center bg-dark animate__animated animate__zoomInDown mb-4">
      <div className="overflow p-3">
        <img src={image} className="card-img-top" alt="logo" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <div className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit voluptas cupiditate amet laudantium accusantium quidem
          aperiam laboriosam exercitationem, architecto illum iusto placeat quae
          repellendus fugiat porro perferendis facere, at repudiandae.
        </div>
        <a
          href={url}
          className="btn btn-outline-info rounded-0"
          rel="noreferrer"
          target="_blank"
        >
          Visitame!
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    url: PropTypes.string,
  }),
};
export default Card;
