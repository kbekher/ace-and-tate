import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './About.scss';

const About = () => {
  return (
    <div className="About">
      <div className="About__content">
        {[1, 2, 3, 4].map(item => (
          <Tilt
            key={item}
            className={"About__container-" + item}
            options={{
              max: 15,
              scale: 1,
              speed: 450,
            }}>
            {item !== 4 ? (
              <motion.img
                variants={fadeIn(item === 2 ? "right" : "left", "spring", 0, 1.75)}
                src={`./assets/design/collab${item}.jpg`}
                alt=""
              />

            ) : (
              <motion.h3 variants={fadeIn("left", "spring", 0, 1.75)}>
                Our GANNI collab is back
              </motion.h3>
            )}
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");