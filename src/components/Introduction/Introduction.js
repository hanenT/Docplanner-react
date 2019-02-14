import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
      return (
        <div className="intro">
        <div className="logo-intro">
        <img src="https://www.docplanner.com/img/sygnet.png" alt="Docplanner Logo"/>
        
        <h2 style={{ color:'#00b39b'}}>Making the healthcare experience more human</h2>
        </div>
        <div className="intro-paragraph">
        <p>We want patients to find the perfect doctor and book an
        appointment in the most easy way. The patient journey should be
        enjoyable, and that's why we are always next to them: to help them
        find the best possible care. Anytime, anywhere.</p>
        <p>We also help doctors to better manage their 
        practice and build their online reputation. With our integrated end-to-end solution, doctors 
        are able not only to improve their online presence, but also to 
        devote their time to what really matters: their patients.</p>
        </div>
        </div>
      );
    }
  }
  
  export default Introduction;
  