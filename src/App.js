import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Introduction from './components/Introduction/Introduction';
import { Services, serviceCardPropsList } from './components/Service target/Target';
import BrandsSection from './components/Global Company/Global';
import FeatureSection from './components/Healthcare Platform/Healthcare'
import { Offices, officeCardPropsList } from './components/Cities List/City';
import Contact from './components/Footer/Contact.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Services list={serviceCardPropsList} />
        <BrandsSection />
        <FeatureSection />
        <Offices offices={officeCardPropsList} />
        <Contact />
      </div>
    );
  }
}

export default App;
