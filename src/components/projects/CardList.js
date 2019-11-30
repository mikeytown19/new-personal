import  React from "react";
import { Card } from "./Card";
import {cardData } from './cardData'

export const CardList = () => {
  return (
    <div className='projects'>
        <ul className="card-list">
      {cardData.map(card => {
        return (
          <Card
            key={card.id}
            {...card}
          />
        )
      })}
    </ul>
    </div>

  );
}



