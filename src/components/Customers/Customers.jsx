import React from 'react';


import './Customers.scss';


export const Customers = () => {
  return (
    <div className="Customers">
      <div className="Customers__content">
        <div className="Customers__text">
          <h3>You make us look good</h3>

          <p>Jay, Kai, Lee, Liam, Lily, Madeleine, Max, Monty, Morris, Neil, Nelson, Nina, Pierce, Ray, Roth, Saul, Tyler, Wilson﻿</p>
        </div>

        <div className="Customers__people">
          <div className="Customers__img-container">
            <img src="./assets/design/people1.jpg" alt="customer" />
          </div>
          <div className="Customers__img-container">
            <img src="./assets/design/people2.jpg" alt="customer" />
          </div>
          <div className="Customers__img-container">
            <img src="./assets/design/people3.jpg" alt="customer" />
          </div>
        </div>
      </div>
    </div>
  );
}

