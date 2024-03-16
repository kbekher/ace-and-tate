import React from 'react';

import './Goods.scss';

import { products } from './products';

export const Goods = () => {
  return (
    <div className='Goods'>
      <div className="Goods__content">

        <div className='Goods__top'>
          <h2>New in</h2>
          <button>See all</button>
        </div>

        <div className="Goods__wrapper">
          {products.map(item => {
            const { id, name, color, price } = item;

            return (
              <div className='Goods__card' key={id}>
                <div className='Goods__img-container'>
                  <button className='Goods__fav-icon'>
                  </button>

                  <img src={`./assets/goods/glass${id}.webp`} alt="glasses img"  className='Goods__good-img'/>
                </div>

                <div className="Goods__info">
                  <span>{name}</span>
                  <span className='Goods__color'>{color}</span>
                  <span>{price}&euro;</span>
                  <button className='Goods__cart-btn'>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
