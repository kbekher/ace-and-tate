import React, { useContext, useEffect, useState } from 'react';
import { getRandomProducts } from '../../helpers/utils';
import { products } from '../Goods/products';
import { GoodCard } from '../GoodCard';

import './Recos.scss';
import { CartContext } from '../../store/SavedProductsContext';

const Recos = ({ title }) => {
  const { isCartOpen } = useContext(CartContext);
  
  const [recoProducts, setRecoProducts] = useState([]);

  useEffect(() => {
    if (recoProducts.length === 0) {
      setRecoProducts(getRandomProducts(products));
    }
  }, [recoProducts]);

    if (isCartOpen) return null;

  return (
    <div className='Recos'>

      <h2 className='Recos__title'>{title}</h2>

      <div className="Recos__products">
        {recoProducts.map(product => (
          <GoodCard product={product} />
        ))}
      </div>

    </div>
  )
}

export default Recos;
