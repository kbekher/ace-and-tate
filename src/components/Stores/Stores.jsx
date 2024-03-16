import React from 'react';

import './Stores.scss';

export const Stores = () => {
  return (
    <div className='Stores'>
      <div className="Stores__content">
        <div className="Stores__img"></div>

        <div className="Stores__text">
          <h3>Our stores</h3>
          <p>
            You can find us in more than 85 stores in 10 countries. With their modern, lively and inviting appearance,
            our stores ensure a true shopping experience. Visit one of our in-house opticians for an eye test or get
            advice from our expert staff.
          </p>
          <button>Find stores</button>
        </div>
      </div>
    </div>
  );
}

