import React from "react";
import './Greet.css'
const Greet = () => {
  return (
      <div className="greet-container">
        <div className="greet">
          <p>
            <span>Hello Dev.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Help explain a concept in a kid friendly way</p>
            <i className="fa-regular fa-lightbulb"></i>
          </div>
          <div className="card">
            <p>Write a product description for a new type of toothbrush</p>
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className="card">
            <p>Create a travel itinerary for a city</p>
            <i className="fa-regular fa-compass"></i>
          </div>
          <div className="card">
            <p>Help design a database schema for a business</p>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
      </div>
  );
};

export default Greet;
