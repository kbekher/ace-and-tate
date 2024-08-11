import React from 'react';
import { motion } from 'framer-motion';

import { textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { products } from './products';
import { GoodCard } from '../GoodCard';

import './Goods.scss';

const Goods = () => {
  return (
    <div className='Goods'>
      <div className="Goods__content">

        <motion.div variants={textVariant(1.5)} className='Goods__top'>
          <h2>New in</h2>
          <button className="Goods__more-btn Goods__more-btn--desktop" disabled>See all</button>
        </motion.div>


        <div className="Goods__wrapper">
          {products.map((item) => (
            <GoodCard key={item.id} product={item} />
          ))}
        </div>

        <button className="Goods__more-btn Goods__more-btn--mobile" disabled>See all</button>
      </div>
    </div>
  );
}

export default SectionWrapper(Goods, "goods");