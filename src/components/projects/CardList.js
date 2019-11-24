import React from "react";
import { Card } from "./Card";

import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <div className='projects'>
      <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
  </div>

);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);


const cardData = [
  // Photo by ivan Torres on Unsplash
  {
    id: "1",
    src:"https://picsum.photos/700",
    category: "Freelance",
    title: "Weber County Commisioner website i built for my dad.",
    pointOfInterest: 80,
    backgroundColor: "#EF626C"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "2",
    src:"https://picsum.photos/600",
    category: "For Fun",
    title: "A blog i am working on using Contentfull, Gatsby and Framer Motion",
    pointOfInterest: 120,
    backgroundColor: "#ADBCA5"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "3",
    src:"https://picsum.photos/500",
    category: "For Fun",
    title: "A meme generator ",
    pointOfInterest: 260,
    backgroundColor: "#4E598C"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    src:"https://picsum.photos/802",
    category: "Work",
    title: "Bruner Dynamics, a website for the future",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    src:"https://picsum.photos/803",
    category: "For Fun",
    title: "Tic Tac Toe",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    src:"https://picsum.photos/800",
    category: "For Fun",
    title: "A Carousel i built using Vanilla JS, html and css",
    pointOfInterest: 60,
    backgroundColor: "#FC7753"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    src:"https://picsum.photos/800",
    category: "Cats",
    title: "Yes, They Are Sociopaths",
    pointOfInterest: 200,
    backgroundColor: "#9EBC9F"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    src:"https://picsum.photos/800",
    category: "Holidays",
    title: "Seriously the Only Escape is the Stratosphere",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];
