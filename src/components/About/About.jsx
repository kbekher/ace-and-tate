import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import './About.scss';

const collabItems = [
  {
    id: 1,
    url: 'https://i.postimg.cc/G3krcyGZ/colab-1.jpg'
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/VvBc4xzY/colab-2.jpg'
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/SRph6SFT/colab-3.jpg'
  },
  {
    id: 4,
  },
];

const About = () => {
  return (
    <div className="About">
      <div className="About__content">
        {collabItems.map(item => (
          <Tilt
            key={item.id}
            className={"About__container-" + item.id}
            options={{
              max: 15,
              scale: 1,
              speed: 450,
            }}>
            {item.id !== 4 ? (
              <motion.img
                variants={fadeIn(item.id === 2 ? "right" : "left", "spring", 0.75, 1.75)}
                src={item.url}
                alt=""
              />

            ) : (
              <motion.h3 variants={fadeIn("left", "spring", 0.75, 1.75)}>
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