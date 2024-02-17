import React from 'react';
import "./Card.css"

const Card = (props) => {
    return (
        <div>
  <div className="card">
    <figure className="card__figure">
    </figure>
    <div className="card__reader">
      <div className="card__reader--risk card__reader--risk-one" />
      <div className="card__reader--risk card__reader--risk-two" />
      <div className="card__reader--risk card__reader--risk-three" />
      <div className="card__reader--risk card__reader--risk-four" />
    </div>
    <p className="card__number">{props.number}</p>
    <div className="card__dates">
      <span className="card__dates--first">{props.year}/{props.month}</span>
    </div>
    <p className="card__name">{props.name}</p><p>
    </p><div className="card__flag">
      <div className="card__flag--globe" />
      <div className="card__flag--red" />
      <div className="card__flag--yellow" />
    </div>
  </div>
</div>
        )
}

export default Card;