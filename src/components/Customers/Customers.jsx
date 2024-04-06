import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './Customers.scss';


const Customers = () => {
  return (
    <div className="Customers">
      <div className="Customers__content">
        <motion.div
          variants={textVariant(1.75, 0.5)}
          className="Customers__text"
        >
          <h3>You make us look good</h3>

          <p>Jay, Kai, Lee, Liam, Lily, Madeleine, Max, Monty, Morris, Neil, Nelson, Nina, Pierce, Ray, Roth, Saul, Tyler, Wilson﻿</p>
        </motion.div>

        <div className="Customers__people">
          {[1, 2, 3].map(item => (
            <motion.div
              variants={fadeIn("up", "spring", 0.5 * item, 0.75)}
              className="Customers__img-container"
            >
              <img src={`./assets/design/people${item}.jpg`} alt="customer" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Customers, "customers");