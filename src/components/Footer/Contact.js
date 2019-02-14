import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
      return (
        <div className="bottom-footer">
        <p>We are leaders in 10 countries: <a className="cities-links" href="#">Poland</a>, 
        <a className="cities-links"  href="#">Turkey</a>, 
        <a className="cities-links"  href="#">Spain</a>, 
        <a className="cities-links"  href="#">Italy</a>, 
        <a className="cities-links"  href="#">Czech Republic</a>, 
        <a className="cities-links"  href="#">Mexico</a>, 
        <a className="cities-links"  href="#">Colombia</a>, 
        <a className="cities-links"  href="#">Brazil</a>, 
        <a className="cities-links"  href="#">Argentina</a> and 
        <a className="cities-links"  href="#">Chile</a></p>
    
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
        </p>
        <p>www.docplanner.com © 2019</p>
    </div>
      );
    }
  }
  
  export default Contact;