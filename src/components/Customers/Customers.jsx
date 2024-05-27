import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './Customers.scss';

const customersList = [
  {
    id: 1,
    url: "https://i.postimg.cc/XYPtKj9f/people-1.jpg"
  },
  {
    id: 2,
    url: "https://i.postimg.cc/vm6k3Jvp/people-2.jpg"
  },
  {
    id: 3,
    url: "https://i.postimg.cc/0QY3q7Fn/people-3.jpg"
  },
];

const Customers = () => {
  return (
    <div className="Customers">
      <div className="Customers__content">
        <motion.div
          variants={textVariant(1.75, 0.5)}
          className="Customers__text"
        >
          <h3>You make us look good</h3>

          <p>Jay, Kai, Lee, Liam, Lily, Madeleine, Max, Monty, Morris, Neil, Nelson, Nina, Pierce, Ray, Roth, Saul, Tyler, Wilson</p>

          <button type="button">Reviews</button>
        </motion.div>

        <div className="Customers__people">
          {customersList.map(item => (
            <motion.div
              variants={fadeIn("up", "spring", 0.5 * item.id, 0.75)}
              className="Customers__img-container"
            >
              <img src={item.url} alt="customer" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Customers, "customers");