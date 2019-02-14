import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
      return (
        <div className="main-nav">
        <div className="logo-doc">
        <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Logo" width="300px"
    height="50px"/>
        </div>
        <div className="menu">
        <button className="button-menu" style={{ color:'#00b39b'}}>About us</button>
        <button className="button-menu">Career</button>
        <button className="button-menu">Departments</button>
        </div>
         
        </div>
      );
    }
  }
  
  export default Header;
  