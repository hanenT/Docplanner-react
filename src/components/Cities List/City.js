import React from 'react';
import './City.css';


export let officeCardPropsList = [
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      officeName: "Warsaw",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    },
    {
      image: "https://www.docplanner.com/images/barcelona.png",
      officeName: "Barcelona",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    },
    {
      image: "https://www.docplanner.com/images/istanbul.png",
      officeName: "Istanbul",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    },
    {
      image: "https://www.docplanner.com/images/rome.png",
      officeName: "Rome",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    },
    {
      image: "https://www.docplanner.com/images/mexico-city.png",
      officeName: "Mexico city",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    },
    {
      image: "https://www.docplanner.com/images/curitiba.png",
      officeName: "Curitiba",
      link: "https://www.docplanner.com/career?&loc=poland#jobs-offers"
    }
  ];
  
  let introProps = {
    icone: "https://www.docplanner.com/img/sygnet.png",
  
    title: "Making the healthcare experience more human",
  
    firstIntroText: `We want patients to find the perfect 
      doctor and book an appointment in the most easy way. 
      The patient journey should be enjoyable, and that's why we are always next to them: to help them 
      find the best possible care.Anytime, anywhere`,
  
    secondIntroText: `We also help doctors to better manage their practice 
      and build their online reputation. With our integrated end-to-end 
      solution, doctors are able not only to improve their online presence, 
      but also to devote their time to what really matters: their patients.`
  };
  export const Offices = props => {
    return (
      <div className="offices-section">
        <div className="offices-intro">
          <h1 style={{ color: "#00b39b" }}>
            Improve the lives of millions.<br /> Change yours forever
          </h1>
          <p style={{ color: "#747474" }}>
            More than 500 team mates share our same vision, goals and passion.
            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
            Curitiba, our search for great talent never stops.
          </p>
        </div>
        <div className="offices">
          {props.offices.map((el, i) => <OfficeCard office={el} key={i} />)}
        </div>
      </div>
    );
  };
  const OfficeCard = ({ office: { image: img, officeName, link } }) => {
    return (
      <a href={link} style={{ textDecoration: "none" }}>
        <div className="office-card">
          <img src={img} />
          <div className="office-description">
            <h4 className="office-name">{officeName}</h4>
            <input className="office-btn" type="button" value="SEE OPENINGS" />
          </div>
        </div>
      </a>
    );
  };