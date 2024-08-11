import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { AWS_URL }from '../../constants/constants';

import './About.scss';

const IMG_URL = `${AWS_URL}design/`;

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
                variants={fadeIn(item === 2 ? "right" : "left", "spring", 0.75, 1.75)}
                src={`${IMG_URL}colab_${item}.jpg`}
                alt=""
              />

            ) : (
              <motion.h3 variants={fadeIn("left", "spring", 0.75, 1.75)}>
                Our GANNI  <br /> collab is back
              </motion.h3>
            )}
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");