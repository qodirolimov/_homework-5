import React from 'react';
import "./card.scss";

const Card = ({data:{name,region,population,capital,flags}}) => {
   return (
      <>

        <div className="card">
        <img src={flags.png} alt="flags" className="card__image" />
        <h1 className="card__title">{name}</h1>
        <p className="card__text__first">Population:{population}</p>
        <p className="card__text__second">Region: {region}</p>
        <p className="card__text__third">Capital: {capital}</p>
      </div>

     

      </>
   );
};

export default Card;