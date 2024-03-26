import React from 'react';

import './Intro.scss';

export const Intro = () => {
  return (
    <div className='Intro'>
      <div className="Intro__content">
        <div className="Intro__textBox">
          <h1 className='Intro__title'>Get to know our glasses</h1>
          <img src="./assets/design/header-el.jpg" alt="header element" className="Intro__innerImg" />
        </div>
      </div>
    </div>
  );
}