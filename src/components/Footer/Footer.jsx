import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; Cold&Brew 2023</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="/">Terms of Use</a></li>
              <li className="list-inline-item"><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;