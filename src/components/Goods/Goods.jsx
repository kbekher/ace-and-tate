import React from 'react';

import { GoodCard } from './GoodCard';

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
          {products.map(item => (
            <GoodCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
