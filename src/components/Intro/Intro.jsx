import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './Intro.scss';

const Intro = () => {
  return (
    <motion.div
      variants={fadeIn("up", "linear", 0, 1)}
      className="Intro"
    >
      <div className="Intro__content">
        <div className="Intro__textBox">
          <h1 className='Intro__title'>Get to know our glasses</h1>
          <button className='Intro__button'>Shop new</button>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionWrapper(Intro, "intro");