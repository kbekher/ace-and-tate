import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './Stores.scss';

const Stores = () => {
  return (
    <div className='Stores'>
      <div className="Stores__content">
        <motion.div
          variants={fadeIn("right", "spring", 0.75, 1.25)}
          className="Stores__img"
        >
          <img src="https://i.postimg.cc/66hSjLd5/store.jpg" alt="store" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.75, 1.25)}
          className="Stores__text"
        >
          <h3>Our stores</h3>
          <p>
            You can find us in more than 85 stores in 10 countries. With their modern, lively and inviting appearance,
            our stores ensure a true shopping experience. Visit one of our in-house opticians for an eye test or get
            advice from our expert staff.
          </p>
          <Link to={{ pathname: '/stores' }}>Find stores</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Stores, "stores");
