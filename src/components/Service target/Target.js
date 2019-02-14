import React, { Component } from 'react';
import './Target.css';

export let serviceCardPropsList = [
    {
      category: "For patients",
      title: "Find a doctor, book a visit and solve any health-related doubt",
      background: "#00b39b",
      image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
      select: true
    },
    {
      category: "For doctors",
      title: "Save time managing visits and cut no-shows by half",
      background: "#3d83df",
      image: "https://www.docplanner.com/img/screen-saas@2x.png",
      select: false
    }
  ];
  export const Services = props => {
    return (
      <div className="services">
        {props.list.map((el, i) => <ServiceCard card={el} key={i} />)}
      </div>
    );
  };

  const ServiceCard = ({
    card: { background, category, title, select, image }
  }) => {
    return (
      <div className="service-card" style={{ backgroundColor: background }}>
        <p className="card-category">{category}</p>
        <h2 className="service-title">{title}</h2>
        <div>
          {select && (
            <input
              className="service-button"
              type="button"
              value="CHOOSE COUNTRY"
              style={{ position: "absolute" }}
            />
          )}
        </div>
  
        <img className="card-image" src={image} width="350px" />
      </div>
    );
  };
  
  export default ServiceCard;
    