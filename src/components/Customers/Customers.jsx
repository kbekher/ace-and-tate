import React from 'react';

import { CustomSwiper } from './CustomSwiper';

import './Customers.scss';


export const Customers = () => {
  return (
    <div className="Customers">
      <div className="Customers__content">
        <div className="Customers__text">
          <h3>You make us look good</h3>

          <p>Jay, Kai, Lee, Liam, Lily, Madeleine, Max, Monty, Morris, Neil, Nelson, Nina, Pierce, Ray, Roth, Saul, Tyler, Wilson﻿</p>
        </div>

        <div className="Customers__slider">
          <CustomSwiper />
        </div>
      </div>
    </div>
  );
}

