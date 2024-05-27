import React from 'react';

import './Footer.scss';

export const Footer = () => {
  // Function to set the viewport meta tag content
  const setViewportContent = (content) => {
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', content);
  };

  // useEffect(() => {
    const handleFocus = () => {
      setViewportContent('width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes');
    };

    const handleKeyUp = () => {
      setViewportContent('width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    };

    const handleBlur = () => {
      setViewportContent('width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    };
  // }, []);
  return (
    <div className='Footer'>
      <div className="Footer__content">

        <div className="Footer__info-wrapper">
          <div className="Footer__info-box">
            <h4>Contact</h4>
            <ul>
              <li>Mo - Fr, 9:00 - 17:00</li>
              <li><a href="tel:+49(0)3056796633">+49 (0)30-56 79 66 33</a></li>
              <li><a href="tel:+3197010240634">+31 97010240634</a></li>
              <li><a href="mailto:hallo@aceandtate.de">hallo@aceandtate.de</a></li>
            </ul>
          </div>

          <div className="Footer__info-box">
            <h4>Stores</h4>
            <ul>
              <li>Stores</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="Footer__info-box">
            <h4>Help</h4>
            <ul>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="Footer__info-box">
            <h4>Social Media</h4>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

          <div className="Footer__info-box">
            <h4>Stay up to date</h4>
            <label for="email-input" class="input-line">
              Subscribe to our newsletter
              <input 
                type="email" 
                id="email-input" 
                placeholder="Your email address"
                onFocus={handleFocus}
                onKeyUp={handleKeyUp}
                onBlur={handleBlur}
              />
            </label>
          </div>

        </div>

        <div className="Footer__logo">
          <img src="./assets/logo-footer.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

