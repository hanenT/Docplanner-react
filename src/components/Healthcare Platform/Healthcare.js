import React from 'react';
import './Healthcare.css';

let featureCardPropsList = [
    {
      icone: "https://www.docplanner.com/img/flag.png",
      title: "Leader in 8 countries",
      description:
        "Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
    },
    {
      icone: "https://www.docplanner.com/img/visits.png",
      title: "600 000 appointments",
      description: "booked last month"
    },
    {
      icone: "https://www.docplanner.com/img/patients.png",
      title: "20 million unique patients",
      description: "visit us every month"
    },
    {
      icone: "https://www.docplanner.com/img/doctors.png",
      title: "35 000 active doctors",
      description: "trust in our solutions"
    }
  ];
  const FeatureSection = () => {
    return (
      <div className="feature-section">
        <div className="feature-intro">
          <h1 className="feature-intro-title">
            The world's biggest healthcare platform
          </h1>
          <p className="feature-intro-text">
            We work from 6 offices all over the world, bringing Docplanner <br />Group
            to life in almost 20 countries.
          </p>
          <img src="https://www.docplanner.com/img/logo.png" className="feature-intro-image"></img>
        </div>
        <Features featureList={featureCardPropsList} />
      </div>
    );
  };
  const FeatureCard = ({ feature }) => {
    return (
      <div className="feature-card">
        <img src={feature.icone} width="30px" />
        <h3 className="feature-name"> {feature.title} </h3>
        <p className="feature-description"> {feature.description} </p>
      </div>
    );
  };
  
  
  const Features = props => {
    return (
      <div className="features">
        {props.featureList.map((el, i) => <FeatureCard feature={el} key={i} />)}
      </div>
    );
  };
  export default FeatureSection;
