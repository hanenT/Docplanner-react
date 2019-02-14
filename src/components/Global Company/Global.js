import React from 'react';
import './Global.css';

let brandsItemList = [
    "ZnanyLekarz",
    "Doctoralia",
    "MioDottore",
    "DoktorTakvimi",
    "Ismertorvos",
    "ZnamyLekar"
  ];
  const Brands = props => {
    return props.brandItems.map((el, i) => (
      <div className="brand-item" key={i}>
        <a href="" style={{ textDecoration: "none", color: "#bdbdbd" }}>
          {el}
        </a>
      </div>
    ));
  };
  
  const BrandsSection = () => {
    return (
      <div className="brands-section">
        <div className="brands-title">
          <h2>We are a global company with local culture</h2>
        </div>
        <div className="brands" onMouseOver=" #00b39b">
          <Brands brandItems={brandsItemList} />
        </div>
      </div>
    );
  };
  export default BrandsSection;