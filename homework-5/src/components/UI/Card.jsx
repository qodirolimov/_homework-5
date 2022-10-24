import React, { useContext } from "react";
import "./card.scss";
import context from "../../context";

const Card = ({ data: { name, region, population, capital, flags } }) => {
  const { language, lang } = useContext(context);

  const t = language[lang];

  return (
    <>
      <div className="card">
        <img src={flags.png} alt="flags" className="card__image" />
        <h1 className="card__title">{name}</h1>
        <p className="card__text__first">
          {t.Population}: {population}
        </p>
        <p className="card__text__second">
          {t.Region}: {region}
        </p>
        <p className="card__text__third">
          {t.Capital}: {capital}
        </p>
      </div>
    </>
  );
};

export default Card;
