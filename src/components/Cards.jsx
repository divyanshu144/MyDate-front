import React, { useState} from "react";
import TinderCard from "react-tinder-card";

import "./Cards.css";

const Cards = () => {
  const [people] = useState([
    {
      pics: 
        "https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      ,
      name: "Chloe",
      age: 29,
      distance: "3 miles away",
      text:
        "I keep calling the plumber round, and he keeps fixing stuff. Where am I going wrong?"
    },
    {
      pics: 
        "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        
      ,
      name: "Jane",
      age: 22,
      distance: "2 miles away",
      text:
        "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife."
    },
    {
      pics: 
        "https://images.unsplash.com/photo-1584287981937-67ab60932edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ,
      name: "Savannah",
      age: 18,
      distance: "1 mile away",
      text: "A little known fact is that I cover about 40% of Africa."
    },
    {
      pics: 
        "https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        
      ,
      name: "Heather",
      age: 32,
      distance: "4 miles away",
      text:
        "Respiratory Therapy Student. Cute enough to take your breath away, smart enough to bring it back"
    }
  ]);

  

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.pics})`}}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
